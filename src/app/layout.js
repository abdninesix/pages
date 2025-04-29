import { Barlow } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const myfont = Barlow({ weight: '400', subsets: ['latin'], display: 'swap', });

export async function generateMetadata() {
  return {
    title: "Abdullah | Portfolio",
    description: "True design experience",
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={myfont.className}>
          <TransitionProvider>
          {children}
          </TransitionProvider>
      </body>
    </html>
  );
}