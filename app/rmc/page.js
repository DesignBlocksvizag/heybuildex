import React from "react";
import { OtherData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Ready Mix Concrete (RMC) for Construction Projects | HeyBuildex",
  description:
    "Get high-quality Ready Mix Concrete (RMC) for all construction needs. On-time delivery, customized solutions, and reliable strength. Request a quote today!",
  keywords:
    "Ready Mix Concrete, RMC, Ready Mix Concrete Suppliers, Concrete for Construction, High Strength Concrete, Design Mix Concrete, Fiber Reinforced Concrete, RMC Delivery, Commercial Concrete, Residential Concrete"
};
export default function RMCPage() {
  const cementItem = OtherData.find((item) => item.link === "ready-mix-concrete");

  if (!cementItem) {
    return notFound();
  }

  return (
    <>
      <Header />
      <SteelProductPage product={cementItem} brands={false} breadcrumbs={false}/>
      <Footer />
    </>
  );
}
