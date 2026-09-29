import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MPOS — Technology for Better Business",
  description: "Business management software for restaurants, hotels, spas, banquets and HR. All-in-one platform for operations.",
  keywords: "POS system, restaurant management, hotel software, spa management, banquet software, HR payroll",
  authors: [{ name: "MPOS" }],
  creator: "MPOS",
  publisher: "MPOS",
  robots: "index, follow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mpos.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mpos.com",
    siteName: "MPOS",
    title: "MPOS — Technology for Better Business",
    description: "Complete business management software for restaurants, hotels, spas, banquets and HR operations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=90",
        width: 1200,
        height: 630,
        alt: "MPOS Business Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MPOS — Technology for Better Business",
    description: "Complete business management software for restaurants, hotels, spas, banquets and HR operations.",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c99635" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MPOS",
            description: "Business management software for restaurants, hotels, spas, banquets and HR",
            url: "https://mpos.com",
            logo: "https://mpos.com/logo.png",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+977-000-000-0000",
              contactType: "Customer Service",
            },
          })}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
