import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Yen-Jung, Chen's Portfolio",
  description: "A personal website about Yen-Jung, Chen.",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
