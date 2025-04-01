import type { Metadata } from "next";
import "./globals.css";
import { VT323 } from "next/font/google";

export const metadata: Metadata = {
   title: "Excuse Generator",
   description:
      "A web app where users can generate, store, and manage excuses for getting out of situations (work, school, dates, gym, etc.).",
};

const vT323 = VT323({
   weight: "400",
   subsets: ["latin"],
   display: "swap",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={vT323.className}>
         <body>{children}</body>
      </html>
   );
}
