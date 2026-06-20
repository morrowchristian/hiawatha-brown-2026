import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiawatha Brown | Cleveland City Council - District 1",
  description: "Elect Hiawatha Brown for Cleveland City Council District 1. Dedicated to public safety, better parks, and economic opportunity for every resident in Cleveland, Tennessee.",
  keywords: ["Hiawatha Brown", "Cleveland City Council", "District 1", "Cleveland TN", "2026 Election"],
  authors: [{ name: "Friends of Hiawatha Brown" }],
  openGraph: {
    title: "Hiawatha Brown for Cleveland City Council District 1",
    description: "Experience, heart, and results for Cleveland, Tennessee.",
    images: [
      {
        url: "/hiawatha-brown.png", // Update with full URL in production
        width: 1200,
        height: 630,
        alt: "Hiawatha Brown",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://yourdomain.com/#person",
      "name": "Hiawatha Brown",
      "givenName": "Hiawatha",
      "familyName": "Brown",
      "image": "https://yourdomain.com/hiawatha-brown.png",
      "url": "https://yourdomain.com",
      "jobTitle": "Candidate for City Council District 1",
      "worksFor": {
        "@type": "Organization",
        "name": "Friends of Hiawatha Brown for City Council"
      },
      "description": "Hiawatha Brown is a passionate community leader running for Cleveland City Council District 1 in 2026. Focused on public safety, parks & recreation, and economic growth.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cleveland",
        "addressRegion": "TN",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61567583096946"
        // Add more links here (Instagram, X/Twitter, etc.)
      ],
      "knowsAbout": [
        "Public Safety",
        "Parks and Recreation",
        "Economic Development",
        "Local Government",
        "Community Leadership"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://yourdomain.com/#organization",
      "name": "Friends of Hiawatha Brown for City Council",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/hb-logo.png", // Or your HB circle logo
      "description": "Official campaign supporting Hiawatha Brown for Cleveland City Council District 1 in the 2026 election.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cleveland",
        "addressRegion": "TN",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "campaign information",
        "url": "https://yourdomain.com/#get-involved"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}