import "./globals.css";
import { poppins } from "@/fonts/fonts";
import "aos/dist/aos.css"; // Import AOS CSS file

import AnimationProvider from "./AnimationProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Soulfisher Designs",
  description: "Soulfisher Designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body className={`${poppins.className} antialiased`}>
        <AnimationProvider>
          <Header />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
