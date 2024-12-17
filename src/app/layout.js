import { Monda } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const myfont = Monda({ weight: '400', subsets: ['latin'], display: 'swap', });

export async function generateMetadata() {
  return {
    title: "Abdullah | Portfolio",
    description: "Experience a true responsiveness",
    icons: {
      icon: "/src/app/favicon.png",
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