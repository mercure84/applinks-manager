import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MLux Dev Apps",
    template: "%s | MLux Dev Apps",
  },
  description: "Mobile App development",
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
