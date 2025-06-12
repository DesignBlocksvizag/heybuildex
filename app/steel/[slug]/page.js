import React from "react";
import { SteelData } from "@/src/data";
import SteelProductPage from "@/src/content/Product";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
export default function SteelPage({ params }) {
  const { slug } = params;
  const steelItem = SteelData.find((item) => item.link === slug);

  if (!steelItem) {
    return <div>Steel item not found</div>;
  }

  return (
    <>
      <Header />
      <SteelProductPage product={steelItem} />
      <Footer />
    </>
  );
}
