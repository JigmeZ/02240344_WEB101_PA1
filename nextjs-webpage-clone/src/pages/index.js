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
    <div className={`min-h-screen bg-black text-white ${geistSans.variable} ${geistMono.variable}`}>
      <div className="flex">
        {/* Fixed Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="ml-[250px] flex-1 flex">
          <Feed />
          <Widget />
        </main>
      </div>
    </div>
  );
}