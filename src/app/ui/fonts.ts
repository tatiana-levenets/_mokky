import { Jost, Noto_Sans } from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});
