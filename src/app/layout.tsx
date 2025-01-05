import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLux Dev Apps",
  description: "Reefquizz, CatSelfie, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body data-theme="valentine" className="m-2 w-auto">
        {children}
      </body>
    </html>
  );
}
