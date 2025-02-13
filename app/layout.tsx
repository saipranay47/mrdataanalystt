import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { FlashyPurchaseToasts } from "@/hooks/use-purchase-toasts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr. Data Analyst",
  description:
    "Empower your business with Framer. Create and sell digital products to reach a wider audience.",
  keywords: ["Framer", "digital products", "templates", "mockups", "courses"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
          <FlashyPurchaseToasts />
        </ThemeProvider>
      </body>
    </html>
  );
}
