import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const urbanJungle = localFont({
  src: "../public/fonts/UrbanJungle.otf",
  display: "swap",
  variable: "--font-heading",
});