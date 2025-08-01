import React from "react";
import { CementData } from "@/src/data";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import CementProductPage from "@/src/content/CementProduct";
import { CementMetaData } from "@/src/data";
// export async function generateStaticParams() {
//   return CementData.map((cement)=>({slug: cement.link}))
// }
export async function generateMetadata({ params }) {
   const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data =  CementMetaData.find((item) => item.link === slug);
  const baseUrl = 'https://heybuildex.com'

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: new URL(data.image, baseUrl).href,
          // alt: data.imageAlt,
        },
      ],
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: new URL(data.image, baseUrl).href,
          // alt: data.imageAlt,
        },
      ],
    },
    keywords: data.keywords,
  };
}
export default async function CementPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const cementItem = CementData.find((item) => item.link === slug);

  if (!cementItem) {
    return notFound();
  }

  return (
    <>
      <Header />
      <CementProductPage product={cementItem} brands={false} breadcrumbs={true} />
      <Footer />
    </>
  );
}
