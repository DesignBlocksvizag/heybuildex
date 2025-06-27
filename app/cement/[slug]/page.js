import React from "react";
import { CementData } from "@/src/data";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import CementProductPage from "@/src/content/CementProduct";
export async function generateStaticParams() {
  return CementData.map((cement)=>({slug: cement.link}))
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
