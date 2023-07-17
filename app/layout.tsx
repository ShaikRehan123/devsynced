import "./globals.css";

import type { Metadata } from "next";
import Header from "@/components/custom/Header";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Developer Marketplace",
  description: "Developer Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="container py-8">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
