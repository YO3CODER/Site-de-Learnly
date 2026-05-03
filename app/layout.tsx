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
  title: "^Learnly le site ",
  description: "Learnly le site ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="cupcake"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
