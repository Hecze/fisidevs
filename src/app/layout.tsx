import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const firaCode = Fira_Code({  subsets: ["latin"]});

export const metadata: Metadata = {
  title: "FisiDevs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={firaCode.className}>{children}
      </body>
    </html>
  );
}
