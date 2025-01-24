import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lending Club Analysis",
  description: "Analyze lending data for insights and risk identification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo linking back to home */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
              LC
            </div>
            <span className="text-2xl font-bold">Lending Club Analysis</span>
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/analysis/loan-distribution"
                className="hover:text-blue-600"
              >
                Loan Distribution
              </Link>
            </li>
            <li>
              <Link
                href="/analysis/grade-defaults"
                className="hover:text-blue-600"
              >
                Grade Defaults
              </Link>
            </li>
            <li>
              <Link
                href="/analysis/state-defaults"
                className="hover:text-blue-600"
              >
                State Defaults
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Lending Club Analysis. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
