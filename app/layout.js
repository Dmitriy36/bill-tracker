import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bill Tracker",
  description: "Track your bills and due dates",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <Link href={"/"}>
          <h1 className="text-gradient">Bill Tracker</h1>
        </Link>
        <p>Track Your Bill Due Dates</p>
      </div>
      <GoTo />
    </header>
  );

  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>Bill Tracker</h4>
            <p>|</p>
            <button disabled>Install App</button>{" "}
          </div>
          <p className="copyright">
            © Copyright 2025, Iggs <br />
            All stuff reserved.
          </p>
        </div>
        <div>
          <p>
            Issues? <a>Get help</a>
          </p>
          <p>
            Suggestions for improvement? <a>Share feedback</a>
          </p>
          <div>
            <Link href={"/privacy"}>Privacy Policy</Link>
            <Link href={"/tos"}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <Head />
      <body>
        {header}
        <div className="full-line" />
        <main>{children}</main>
        {footer}
      </body>
    </html>
  );
}
