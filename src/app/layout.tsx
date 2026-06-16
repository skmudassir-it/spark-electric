import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Spark Electric — Professional Electrical Services",
    template: "%s | Spark Electric",
  },
  description:
    "Licensed electricians providing residential, commercial, and industrial electrical services. 24/7 emergency repairs, panel upgrades, EV charger installation, and more.",
  keywords: [
    "electrician",
    "electrical services",
    "residential electrician",
    "commercial electrician",
    "emergency electrical repair",
    "EV charger installation",
    "panel upgrade",
    "lighting design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
