import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Bloom",
   description: "Fntech App",
   icons:{
      icon: "./logo.png",
      apple:"./logo.png",
   }
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
