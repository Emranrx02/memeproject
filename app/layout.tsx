import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Based Penguins",
  description: "This app is built for meme tokens only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
