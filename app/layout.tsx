import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

// const inconsolata = Inconsolata({
//   subsets: ["latin"],
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-roboto",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Testing NextJS | TheBlaiseCode",
  description: "A simple site testing out NextJS",
  keywords: "Next.js, TypeScript, TailwindCSS, Test, TheBlaiseCode",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayut({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="max-w-3xl mx-auto py-10 bg-black text-amber-50">
        <Navbar />

        <main className="">{children}</main>
      </body>
    </html>
  );
}
