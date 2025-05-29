import localFont from "next/font/local";

export const Orbitron = localFont({
  src: "./Orbitron/Orbitron-VariableFont_wght.ttf",
  variable: "--font-orbitron",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export const Montserrat = localFont({
  src: "./Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export const OpenSans = localFont({
  src: "./Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});
