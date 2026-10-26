import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
  title: {
    default: "Morroway Travel Co. | Every Journey, Made Simpler",
    template: "%s | Morroway Travel Co.",
  },
  description: "Make travel planning simpler with Morroway Travel Co. Explore visa assistance, flight ticket booking, hotel reservations and car rental services for your next journey.",
  applicationName: "Morroway Travel Co.",
  openGraph: {
    title: "Morroway Travel Co. | Every Journey, Made Simpler",
    description: "Visa assistance, flights, hotel bookings and car rentals — your travel essentials, together in one place.",
    siteName: "Morroway Travel Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morroway Travel Co. | Every Journey, Made Simpler",
    description: "Your travel essentials, together in one place. Plan your next journey with Morroway.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col w-full max-w-container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
