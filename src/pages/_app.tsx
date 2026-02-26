import "@/styles/globals.css"; // PASTIKAN CSS DI-IMPORT DI SINI
import { HeroUIProvider } from "@heroui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}
