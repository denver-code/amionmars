import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "StellarCity - Mars Colonization Program Tracker",
  description: "Track your application to the Mars Colonization Program!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className='dark'>
      <head>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
