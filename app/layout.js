import { Inter, Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500"], variable: "--font-jakarta" });

export const metadata = {
  title: { default: "Torqe | The AI agent that executes your B2B inbound sales", template: "%s | Torqe" },
  description: "Torqe is an autonomous AI agent that qualifies inbound leads, answers technical questions, generates quotes and books meetings on WhatsApp, email and LinkedIn, with human approval where it matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${body.variable} ${jakarta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
