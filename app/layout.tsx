import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stable OG",
  description: "The StableOG Collection is a limited 5,000-piece NFT series designed to unite all stablecoin enthusiasts and drive adoption across the Stable ecosystem.0",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "stable OG",
    description: "The StableOG Collection is a limited 5,000-piece NFT series designed to unite all stablecoin enthusiasts and drive adoption across the Stable ecosystem.0",
    images: "/logo.svg",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
