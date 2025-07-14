import React from "react";
import { OtherData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Infra Equipment Rental Services for Construction | HeyBuildex",
  description:
    "Rent high-quality piling rigs, transit mixers, and concrete batching plants at competitive prices from HeyBuildex. Get reliable construction equipment for your projects.",
  keywords:
    "Infra equipment rental, piling rigs rental, transit mixers rental, concrete batching plant rental, construction equipment rental, rent piling rigs, transit mixers for rent, batching plant rental, heavy machinery rental, equipment rental services India"
};
export default async function InfraRentalsPage() {
  const cementItem = OtherData.find((item) => item.link === "infra-equipment-rentals");

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
