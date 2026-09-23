import { Analytics } from "@vercel/analytics/next"
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
  title: "Music Island Stories",
  description: "A monochrome Landing page for The Affairs featuring the Music Island Stories Issue ",
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
      <head>
<link href="https://api.fontshare.com/v2/css?f[]=array@401,601&display=swap" rel="stylesheet"></link>
<link href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700,1&display=swap" rel="stylesheet"></link>
<link href="https://api.fontshare.com/v2/css?f[]=pencerio@50&display=swap" rel="stylesheet"></link>
</head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
