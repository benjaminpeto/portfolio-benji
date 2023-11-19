import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "404 - Page not found",
    description: "Welcome in my world! My name is Benji and this is my portfolio website.",
};

export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='dark' style={{ colorScheme: "dark" }}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
