import "./globals.css";

import type { Metadata } from "next";
import Header from "@/components/custom/Header";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { NextAuthProvider } from "./providers";

import { Space_Grotesk, Montserrat, Lato, Roboto } from "next/font/google";

const SpaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const LatoFont = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: "400",
});

const RobotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "DevSynced",
  description: "DevSynced - A community for developers to share and learn",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://devsynced.vercel.app/",
    siteName: "DevSynced",
    title: "DevSynced",
    description: `DevSynced - A community for developers to share and learn`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${SpaceGroteskFont.variable} ${MontserratFont.variable} ${LatoFont.variable} ${RobotoFont.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthProvider>
            <Header />
            <div className="container py-8">{children}</div>
          </NextAuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
