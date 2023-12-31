import { ScrollToTop } from "@/components/scrollToTop/ScrollToTop";
import { Navbar } from "../components/navbar/Navbar";
import "./globals.css";
import { Vibur, Roboto_Mono } from "next/font/google";

const vibur = Vibur({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vibur",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Olga's personal page",
  description: "Personal page with portfolio created with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vibur.variable} ${roboto_mono.variable}`}>
      <body className="font-roboto w-full lg:max-w-[130rem] p-2 md:p-4 lg:p-10 h-max  mb-5 text-black mx-auto bg-slate-300 ">
        <Navbar />

        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
