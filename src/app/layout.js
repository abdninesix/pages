import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const myfont = M_PLUS_Rounded_1c({ weight: '400', subsets: ['latin'], display: 'swap', });

export async function generateMetadata() {
  return {
    title: "A; Builds",
    description: "Experience a true responsiveness",
    icons: {
      icon: "/src/app/favicon.ico",
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