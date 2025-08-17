import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
   weight:["200","400","300","500","600",'700',"800"]
});

export const metadata: Metadata = {
  title: "Jeelicious | Online Store",
  description: "Best chile selling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
