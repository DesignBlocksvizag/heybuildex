import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import ContactPage from "@/src/content/ContactUs/page";
export const metadata = {
  title: "Contact Us – Get in Touch with HeyBuildex",
  description:
    "Have questions or need assistance with construction materials or equipment rentals? Contact HeyBuildex for support, inquiries, or custom quotes. We're here to help!",
  keywords:
    "HeyBuildex contact, contact construction material supplier, equipment rental support, construction helpdesk, get in touch HeyBuildex, customer support HeyBuildex, quote request HeyBuildex, construction materials inquiry, infrastructure equipment contact"
};
export default function MainContactPage() {
  return (
    <>
    <Header />
    <ContactPage />
    <Footer />
    </>
  );
}