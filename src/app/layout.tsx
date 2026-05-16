import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Victor Aseko | Software Engineer",
  description: "Professional portfolio of Victor Aseko, a passionate Software Engineer based in the Nairobi, Kenya. Specialized in building high-quality, scalable applications and digital experiences.",
  keywords: ["Software Engineer", "Web Developer", "Portfolio", "Victor Aseko", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-emerald-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
