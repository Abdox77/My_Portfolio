import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GitHubBall from '@/components/GitHubBall';
import SlidingBar from '@/components/SlidingBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MOHDI Abdessamad",
    template: "%s · MOHDI Abdessamad",
  },
  description: "My personal portfolio",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SlidingBar />
          {children}
          <GitHubBall />
        </Providers>
      </body>
    </html>
  );
}
