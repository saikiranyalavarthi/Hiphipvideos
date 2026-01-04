import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "HipHip",
  description: "Creative Digital Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
