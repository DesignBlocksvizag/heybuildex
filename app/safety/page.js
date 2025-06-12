import React from "react";
import { OtherData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
export default function SafetyPage() {
  const cementItem = OtherData.find((item) => item.link === "safety-equipment");

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
