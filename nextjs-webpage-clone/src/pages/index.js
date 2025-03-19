import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widget from "@/components/Widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`min-h-screen flex bg-black text-white ${geistSans.variable} ${geistMono.variable}`}>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}
