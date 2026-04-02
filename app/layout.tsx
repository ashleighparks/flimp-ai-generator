import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flimp AI Generator",
  description: "AI-powered benefits microsite generator by Flimp Communications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
