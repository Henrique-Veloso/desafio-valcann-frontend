import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniverseEx - Mars Photos",
  description: "Explore as imagens de Marte capturadas pelos Rovers da NASA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex flex-col min-h-screen">
          <Header /> 
          <main className="flex-grow">
            {children} 
          </main>
          <Footer /> 
        </div>
      </body>
    </html>
  );
}