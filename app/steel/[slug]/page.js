import React from "react";
import { SteelData,SteelMetaData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return SteelMetaData.map((cement)=>({slug: cement.link}))
}
export async function generateMetadata({ params }) {
   const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data =  SteelMetaData.find((item) => item.link === slug);
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
export default async function SteelPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const steelItem = SteelData.find((item) => item.link === slug);

  if (!steelItem) {
    return notFound();
  }

  return (
    <>
      <Header />
      <SteelProductPage product={steelItem} brands={true} breadcrumbs={true}/>
      <Footer />
    </>
  );
}
