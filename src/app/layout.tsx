import { AppProvider } from "@/contexts/app";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ReactNode } from "react";
import "uicons/uicons.min.css";

import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Select Meal",
};

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="min-w-[360px] bg-backdrop">
      <body className={workSans.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
