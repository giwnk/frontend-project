import { Google_Sans, Inter, Montserrat } from "next/font/google";
import { Button } from "@heroui/react";
import PageHead from "@/components/ui/page-head";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <main
      className={`${montserrat.variable} font-sans min-h-screen justify-center items-center w-full py-32 px-16 bg-white dark:bg-black sm:items-start`}
    >
      <PageHead></PageHead>
      <Button className="font-medium ">Click Me</Button>
    </main>
  );
}
