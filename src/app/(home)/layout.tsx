import "../globals.css";
import type { Metadata } from "next";
import { Providers } from "../providers";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Benji - Portfolio",
    description: "Welcome in my world! My name is Benji and this is my portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='dark' style={{ colorScheme: "dark" }}>
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
