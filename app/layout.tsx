import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Head from "next/head";

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
    {
      path: "../public/fonts/Futura-Book.otf",
      weight: "500",
      style: "regular",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Syntri",
  description: "Seamless and modern IT solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className={`${futura.variable} font-sans overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
