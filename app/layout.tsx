import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

export const futura = localFont({
  src: [
    {
      path: "../public/fonts/Futura-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Futura-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Futura-Medium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Syntri",
  description: "Seamless and mordern IT solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${futura.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
