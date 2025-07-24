import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import AboutUs from "@/src/content/AboutUs";

export const metadata = {
  title: "About HeyBuildex",
  description: "Discover HeyBuildex, your trusted partner for top-quality construction materials, rental equipment, and unbeatable prices. Simplifying your building journey with convenience and reliability."
}
export default function MainAboutUs() {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
}
