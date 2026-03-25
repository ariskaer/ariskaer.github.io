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

export const metadata = {
  title: "Портфолио | Шведова Арина",
  description: "Frontend разработчик. Проекты, навыки, контакты.",
  openGraph: {
    title: "Портфолио | Шведова Арина",
    description: "Frontend разработчик. Проекты, навыки, контакты.",
    images: ["/og-image.jpg"], // Положите картинку 1200x630 в папку public
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
