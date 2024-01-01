import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

library.add(fas);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Grzegorz Siemieniec",
  description: "Grzegorz Siemieniec - NEXT.JS Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
