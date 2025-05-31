import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import NavContainer from "@/components/navigation/NavContainer";
import Topbar from "@/components/navigation/Topbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tariq Brown",
  description: "Portfolio of a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-inter antialiased min-h-screen bg-white/7`}
      >
        <Topbar />
        <div className="flex">
          <NavContainer />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
