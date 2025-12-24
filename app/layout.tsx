import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gunasekaran - Full Stack Developer Blog",
  description:
    "Portfolio and blog showcasing web development projects, tutorials, and insights on Next.js, React, TypeScript, and modern web technologies.",
  keywords:
    "web development, Next.js, React, TypeScript, portfolio, blog, full stack developer",
  authors: [{ name: "Gunasekaran" }],
  openGraph: {
    title: "Gunasekaran - Full Stack Developer Blog",
    description: "Portfolio and blog showcasing web development projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
