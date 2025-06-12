import React from "react";
import { SteelData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
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
      <SteelProductPage product={steelItem} brands={true}/>
      <Footer />
    </>
  );
}
