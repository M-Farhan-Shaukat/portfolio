import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Muhammad Farhan Shaukat | Full Stack Developer (Laravel & MERN)",
  description:
    "Full Stack Developer with 5+ years of experience building scalable, multi-tenant SaaS applications with Laravel, PHP and the MERN stack (MongoDB, Express.js, React.js, Node.js), plus AI integration.",
  keywords: [
    "Muhammad Farhan Shaukat",
    "Full Stack Developer",
    "Laravel Developer",
    "MERN Stack Developer",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Set the theme before first paint: saved choice, else the OS preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}
