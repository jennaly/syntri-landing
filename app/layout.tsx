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
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
