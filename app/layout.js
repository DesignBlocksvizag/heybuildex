import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "HeyBuildEX – Construction Materials and Equipment Rentals",
  description:
    "Buy TMT bars, construction materials, and rent infra equipment online at HeyBuildEX. Trusted platform with top brands, best prices, and quick delivery.",
  keywords:
    "construction materials, TMT bars, structural steel, cement, ready mix concrete, equipment rental, infrastructure equipment, building materials supplier, online construction materials, construction equipment rental",
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
