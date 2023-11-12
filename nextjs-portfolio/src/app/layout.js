import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Pop = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-Pop",
});
const Montser = Montserrat({
  weight: ["400", "100", "200", "300", "500"],
  subsets: ["latin"],
  variable: "--font-montser",
});
export const metadata = {
  title: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Pop.variable} ${Montser.variable} overflow-x-hidden bg-light min-h-screen w-full dark:bg-dark`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
