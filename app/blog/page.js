"use client";

import { useEffect, useState } from "react";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import SteelStructuresBlog from "@/src/content/Blogs";

export default function BlogPageView() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("blogData");
    console.log(storedData);
    if (storedData) {
      setBlog(JSON.parse(storedData));
    }
  }, []);

  if (!blog) {
    // Show a loading placeholder (skeleton or spinner)
    return (
      <>
        <Header />
        <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <SteelStructuresBlog blog={blog} />
      <Footer />
    </>
  );
}
