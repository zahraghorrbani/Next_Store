import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";

export const metadata: Metadata = {
  title: "Next Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShoppingCartContextProvider>
          <Layout>{children}</Layout>
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
