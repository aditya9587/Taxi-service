import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AeroCab London | Premium UK Airport Taxi & Chauffeur Transfers",
  description:
    "Book fixed-rate, 24/7 airport taxi transfers from Heathrow, Gatwick, Stansted, Luton & London City to anywhere in Greater London. Premium vehicles, flight tracking & meet and greet included.",
  keywords: [
    "UK airport taxi",
    "London airport transfer",
    "Heathrow taxi to London",
    "Gatwick transfer",
    "Chauffeur service London",
    "Fixed price taxi UK",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-dark text-white selection:bg-brand-yellow selection:text-brand-dark">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
