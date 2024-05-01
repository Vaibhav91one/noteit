import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "DVAPI",
  description: "Damn Vulnerable API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Provider>
          <body className={inter.className}>
            <main>
              {children}
            </main>
          </body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
