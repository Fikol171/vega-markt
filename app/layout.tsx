import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/global.css";
import "normalize.css";
import Navigation from "./componets/navigation";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Vega markt",
  description: "Generated by create next app",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
