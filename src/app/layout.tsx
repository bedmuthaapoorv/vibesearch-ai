import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="fo-verify" content="99078900-a479-470d-b88b-0b406b195229" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
