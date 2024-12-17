import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const m_plus = localFont({
  src: [
    {
      path: "./fonts/MPLUSRounded1c-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/MPLUSRounded1c-Bold.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./fonts/MPLUSRounded1c-Medium.ttf",
      style: "normal",
      weight: "500",
    },
  ],
});

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
      <body className={`${m_plus.className} antialiased`}>{children}</body>
    </html>
  );
}
