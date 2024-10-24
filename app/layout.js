

import "./globals.css";
import Footer from "./components/Footer";
import {  Poppins } from 'next/font/google'
import NavSection from "./components/NavSection";
 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600", "700"],
  
});



export const metadata = {
  title: "Tasmim Al Tahsin",
  description: "Tasmim Al Tahsin - Web developer",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={" bg-[#151C25] dark:bg-slate-100 text-[#CCCCCC] dark:text-[#151C25]"}
      >
        <main className={poppins.className}>
          <NavSection/>
          {children}
          <Footer/>
        </main>
          
        

      </body>
    </html>
  );
}
