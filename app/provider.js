"use client";
import { useEffect } from "react";
import Splide from "@splidejs/splide";

export default function Provider() {
  useEffect(() => {
    const splide = new Splide("#product-carousel", {
      type: "loop",
      perPage: 3,
      gap: "20px",
      autoplay: true,
      pauseOnHover: true,
      breakpoints: {
        960: { perPage: 2 },
        600: { perPage: 1 },
      },
    });
    splide.mount();
  }, []);
  return <></>;
}
