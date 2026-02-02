import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Digest - AI-Powered Personalized Newsletter",
  description: "Your AI reads the internet so you don't have to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
