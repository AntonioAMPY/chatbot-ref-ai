import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat ReflexBot",
  description: "Chat with ReflexBot",
  icons: [
    {
      url: "/icons/icon-title.svg",
      rel: "icon",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookiesProvider>{children}</CookiesProvider>
      </body>
    </html>
  );
}
