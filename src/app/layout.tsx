import { ThemeProvider } from "@/components/ThemeComponents/ThemeProvider/theme-provider";
import Footer from "@/components/helperComponents/footer/Footer";
import Navbar from "@/components/helperComponents/navbar/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCCOE-Community-Connect ",
  description: "Akatsuki ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><AuthProvider>
            <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        
        </AuthProvider></ThemeProvider></body>
    </html>
  );
}
