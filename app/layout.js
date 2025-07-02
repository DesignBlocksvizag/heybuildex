import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "Hey Buildex",
  description:
    "Your trusted supplier for TMT Bars, Cement, MS Channels,Roofing Sheets, RMC, Infra Rentals, and Safety Products across India.",
  keywords: [
    "Hey Buildex",
    "Construction materials supplier",
    "TMT Bars",
    "Binding Wire",
    "MS Channel",
    "MS Plate",
    "MS Angle",
    "MS Flat",
    "MS I Beam",
    "MS Round Rod",
    "MS Round Pipe",
    "MS Square Pipe",
    "MS Rectangular Pipe",
    "MS Chequered Plate",
    "Roofing Sheet",
    "Ultratech Cement",
    "Maha Cement",
    "Ramco Cement",
    "Sagar Cement",
    "Ready Mix Concrete",
    "RMC Supplier",
    "Infra Rentals",
    "Construction Equipment Rental",
    "Safety Gear for Construction",
    "Buy Steel Online",
    "Buy Cement Online",
    "Construction Supply India",
    "TMT Bars Supplier",
    "Steel Supply in Visakhapatnam",
    "Cement Dealer in Vijayawada",
    "Construction Supply in Guntur",
    "RMC Supplier in Tirupati",
    "Steel and Cement in Andhra Pradesh",
    "Construction Materials in AP",
    "Construction Supply in Telugu States",
    "Construction Supply in Visakhapatnam",
    "Steel Dealer in Vijayawada",
    "Buy Cement and Steel Online",
    "Construction Services in Telugu",
    "Building Materials Dealer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <meta
          name="google-site-verification"
          content="ReUglBolff0mjryhaGopONsOrcRvls2fENNz0kBVVuE"
        />
        {/* Facebook Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '722479297445145');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Facebook Pixel NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=722479297445145&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        {children}

        {/* Google Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17164106962"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17164106962');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZLFD84G5G3"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLFD84G5G3');
          `}
        </Script>
      </body>
    </html>
  );
}
