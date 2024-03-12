import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from "@/lib/utils";

import "./globals.css";

const IBM_Plex = IBM_Plex_Sans({ subsets: ["latin"], weight:['400','500','600','700'],variable:'--font-ibm-plex' });

export const metadata: Metadata = {
  title: "Imaginify.AI",
  description: "AI Enabled Photo Generator/Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
         <body className={cn('font-IBM_Plex','antialiased',IBM_Plex.variable)}>
           {children}
         </body>
       </html>
    </ClerkProvider>
  );
}
