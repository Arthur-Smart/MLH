import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/globals/navbar/Navbar";
import Footer from "@/globals/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Medical Learning Hub",
  description: "The Medical Learning Hub (MLH) is an e-learning platform that enables healthcare professionals (HCPs) to train and interact with leading medical experts ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar/> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
