import "@/styles/globals.css"; // PASTIKAN CSS DI-IMPORT DI SINI
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  })
  return (
    <main className={` font-sans`}>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <Component {...pageProps} />
        </HeroUIProvider>
      </QueryClientProvider>
    </main>
  );
}
