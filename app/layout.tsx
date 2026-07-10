import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hiawatha-brown-2026.vercel.app'),
  
  title: "Hiawatha Brown | Cleveland City Council - District 1",
  description: "Elect Hiawatha Brown for Cleveland City Council District 1. Dedicated to public safety, better parks, and economic opportunity for every resident in Cleveland, Tennessee.",
  
  keywords: ["Hiawatha Brown", "Cleveland City Council", "District 1", "Cleveland TN", "2026 Election"],
  authors: [{ name: "Friends of Hiawatha Brown" }],
  
  openGraph: {
    title: "Hiawatha Brown for Cleveland City Council District 1",
    description: "Experience, heart, and results for Cleveland, Tennessee.",
    images: [
      {
        url: "/hiawatha-brown.png",
        width: 1200,
        height: 630,
        alt: "Hiawatha Brown",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}