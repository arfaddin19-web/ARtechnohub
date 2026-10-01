import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://artechnohub.com.np"),
  title: {
    default: "MPOS — Restaurant, Hotel, Spa & HR Management Software",
    // No %s template: every page sets its own absolute <title>, and a template
    // would append "| MPOS" to pages that already end in it.
    template: "%s",
  },
  description: "Business management software for restaurants, hotels, spas, salons, banquets and HR. Orders, KOT, billing, inventory, reports and payroll in one connected platform.",
  applicationName: "MPOS",
  keywords: ["AR Technohub", "business management software Nepal", "restaurant management software", "restaurant POS system Nepal", "hotel management software", "spa salon software", "banquet event management software", "HR payroll software", "inventory management software", "billing software", "KOT software", "thermal printer supplier Nepal", "thermal rolls Nepal"],
  authors: [{ name: "AR Technohub", url: "https://artechnohub.com.np" }],
  creator: "AR Technohub",
  publisher: "AR Technohub",
  category: "business",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://artechnohub.com.np",
    siteName: "MPOS",
    title: "MPOS — Restaurant, Hotel, Spa & HR Management Software",
    description: "Business management software for restaurants, hotels, spas, salons, banquets and HR. Orders, KOT, billing, inventory, reports and payroll in one connected platform.",
    images: [
      { url: "https://artechnohub.com.np/og-image.png", width: 1200, height: 630, alt: "MPOS business management software" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MPOS — Restaurant, Hotel, Spa & HR Management Software",
    description: "Business management software for restaurants, hotels, spas, salons, banquets and HR.",
    images: ["https://artechnohub.com.np/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c99635",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c99635" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icon-64.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AR Technohub",
            alternateName: ["AR Technohub", "AR Technohub Nepal"],
            legalName: "AR Technohub",
            description: "AR Technohub develops the MPOS business management software suite and supplies business hardware including PCs, thermal printers, thermal rolls and POS peripherals.",
            slogan: "Software and hardware for better business.",
            url: "https://artechnohub.com.np",
            logo: "https://artechnohub.com.np/logo.png",
            image: "https://artechnohub.com.np/og-image.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Indramarga-10",
              addressLocality: "Pokhara",
              addressRegion: "Gandaki",
              postalCode: "33700",
              addressCountry: "NP",
            },
            areaServed: ["Nepal", "Worldwide"],
            knowsAbout: ["Business management software", "Restaurant management", "Point of sale", "Hotel management", "Spa management", "Banquet management", "HR payroll", "Inventory management", "Business computers", "Thermal printers", "Thermal paper rolls", "POS peripherals"],
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "MPOS business management software" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "PCs and POS terminals" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Thermal receipt printers" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Thermal paper rolls" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "POS peripherals" } },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+977-9869093168",
              email: "artechnohub23@gmail.com",
              contactType: "Customer Service",
              availableLanguage: ["en", "ne"],
            },
          })}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            name: "MPOS",
            alternateName: "MPOS Business Management Software",
            description: "The business management software brand of AR Technohub.",
            url: "https://artechnohub.com.np",
            logo: "https://artechnohub.com.np/logo.png",
            parentOrganization: { "@type": "Organization", name: "AR Technohub", url: "https://artechnohub.com.np" },
          })}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
