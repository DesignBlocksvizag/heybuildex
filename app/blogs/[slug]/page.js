import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import SteelStructuresBlog from "@/src/content/Blogs";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/blogs/read?slug=${slug}`,
      {
        next: {
          revalidate: 0
        }
      }
    );

    if (!res.ok) {
      return { title: "Blog Not Found" };
    }

    const blogData = await res.json();
    return {
      title: blogData.blog?.heading || "Untitled Blog",
      image: process.env.NEXT_PUBLIC_API_BASE + blogData.blog?.image || "/default-blog.jpg"
    };
  } catch (error) {
    return { title: "Error Loading Blog" };
  }
}


export default async function BlogPageView({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  let blog = null;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/blogs/read?slug=${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next : {
          revalidate : 0
        }
      },
    );
    blog = await res.json();
    if (!res.ok) {
      blog = true;
    }
  } catch (error) {
    console.log(error);
  }
  if (blog === true) {
    notFound();
  }

  return (
    <>
      <Header />
      <SteelStructuresBlog blog={blog.blog} />
      <Footer />
    </>
  );
}
