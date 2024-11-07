import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ["latin"] });

const crimson = Crimson_Text({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  fallback: ['Inter'],
  variable: '--font-crimson',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Felipe Dick Calgaro's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${crimson.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
