import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escalent Demo",
  description: "Demo Homepage based on escalent.co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlStyle = {
    boxSizing: "border-box",
    overflowX: "hidden",
    font: "medium/1.2 HelveticaNeue, sans-serif",
    color: "#3f3f3f",
    backgroundColor: "#fff",
  };
  return (
    //@ts-ignore
    <html lang="en" style={htmlStyle}>
      <body className={poppins.className}>
        <div>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
