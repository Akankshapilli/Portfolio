import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const compact = localFont({
  src: "../font/SF-Compact-Rounded-Regular.otf",
  variable: "--compact-rounded",
});

export const metadata: Metadata = {
  title: "Akanksha Pilli",
  description: "Developed by Akanksha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={compact.variable}>{children}</body>
    </html>
  );
}
