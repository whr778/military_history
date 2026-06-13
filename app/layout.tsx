import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Military History Reading List",
  description: "A categorized military history reading list with summaries and book links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
