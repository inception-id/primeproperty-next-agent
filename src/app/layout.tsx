import type { Metadata, Viewport } from "next";
import { PT_Sans } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const ptSans = PT_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Primepro Agent",
  robots: "noindex, nofollow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={ptSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
