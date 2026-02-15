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
  title: "Maharaj | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Maharaj — Full Stack MERN Developer, AI Enthusiast, and Startup Builder from Mangalore, India. Building scalable, AI-powered products that solve real-world problems.",
  keywords: [
    "Maharaj",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "AI",
    "Portfolio",
    "Mangalore",
    "Web Developer",
  ],
  authors: [{ name: "Maharaj" }],
  openGraph: {
    title: "Maharaj | Full Stack Developer & AI Enthusiast",
    description:
      "Building scalable, AI-powered products that solve real-world problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharaj | Full Stack Developer & AI Enthusiast",
    description:
      "Building scalable, AI-powered products that solve real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
