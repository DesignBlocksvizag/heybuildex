import React from "react";
import { OtherData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Safety Equipment for Construction – Buy Industrial Safety Gear Online | HeyBuildex",
  description:
    "Explore HeyBuildex for high-quality safety equipment, including helmets, gloves, safety masks, and more. Get unbeatable prices and fast delivery for your construction projects.",
  keywords:
    "safety equipment, industrial safety gear, buy safety equipment online, safety helmets, hand gloves, safety masks, reflective jackets, industrial safety shoes, fire extinguishers, construction safety gear, safety equipment suppliers, safety products India, bulk safety equipment, HeyBuildex"
};
export default function SafetyPage() {
  const cementItem = OtherData.find((item) => item.link === "safety-equipment");

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
