import React from "react";
import { CementData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
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
      <SteelProductPage product={cementItem} brands={false} />
      <Footer />
    </>
  );
}
