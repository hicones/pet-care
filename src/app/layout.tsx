import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pet Care",
  description:
    "Adote um pet ou faça doações para organizações de resgate de animais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} ${sora.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
