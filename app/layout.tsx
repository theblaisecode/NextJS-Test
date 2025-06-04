import Navbar from "../components/Navbar";
import { Metadata } from "next";
import { Inter, Inconsolata, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "NextJS | TheBlaiseCode",
  description: "A simple NextJS codebase",
  keywords: "Next.js, TypeScript, TailwindCSS, NextJS, TheBlaiseCode",
  icons: {
    icon: "/profile.png",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-amber-50">
        <div className={inconsolata.className}>
          <Navbar />

          <main className="max-w-3xl mx-auto py-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
export default RootLayout;
