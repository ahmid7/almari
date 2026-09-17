import type { Metadata } from "next";
import { Poppins, TikTok_Sans, UnifrakturCook } from "next/font/google";
import "./globals.css";

const tiktokSans = TikTok_Sans({
  variable: "--font-tiktok-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const unifrakturCook = UnifrakturCook({
  variable: "--font-unifraktur-cook",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Next Tailwind App",
  description: "A Next.js app with Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tiktokSans.variable} ${poppins.variable} ${unifrakturCook.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col text-[#fef7ff]">
        {children}
      </body>
    </html>
  );
}
