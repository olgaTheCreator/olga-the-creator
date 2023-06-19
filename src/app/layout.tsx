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
  title: "Olga >>The Creator<< Curylo personal page",
  description: "Personal page with portfolio created with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vibur.variable} ${roboto_mono.variable}`}>
      <body className="font-roboto w-full p-10 h-screen mb-5 text-black">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
