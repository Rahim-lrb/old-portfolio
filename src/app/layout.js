import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata = {
  title: "Portfolio | abderrahim",
  description: "my coding portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className={montserrat.className}>

        <Navbar></Navbar>
        <div className="w-full h-full z-0 inline-block bg-light">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
