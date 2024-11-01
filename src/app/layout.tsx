import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



export const metadata: Metadata = {
  title: "Pak Wheel Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex flex-col h-full w-full justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
