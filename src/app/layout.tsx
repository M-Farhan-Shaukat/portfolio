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
  title: "Muhammad Farhan Shaukat | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 5+ years of experience building scalable, multi-tenant SaaS applications with Laravel, PHP, React.js, Node.js and AI integration.",
  keywords: [
    "Muhammad Farhan Shaukat",
    "Full-Stack Software Engineer",
    "Laravel Developer",
    "PHP Developer",
    "React.js Developer",
    "Node.js Developer",
    "AI Integration",
    "Lahore",
  ],
  authors: [{ name: "Muhammad Farhan Shaukat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
