import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import SteelStructuresBlog from "@/src/content/Blogs/Blog1";

export default async function BlogPageView({ params }) {
    const resolvedParams = await params;
  const { slug } = resolvedParams;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/blogs/read?slug=${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Always get fresh data
    });
    const blog = await res.json();

  if (!blog) {
    return (
      <>
        <Header />
        <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <SteelStructuresBlog blog={blog.blog} />
      <Footer />
    </>
  );
}
