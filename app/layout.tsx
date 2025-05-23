import NavBar from "@/components/NavBar";
import Head from "next/head";
import { ReactNode } from "react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata = {
  title: "Bruno Rodrigues",
  description: "Bruno Rodrigues website and blog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Bruno Rodrigues</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />

        <meta property="og:url" content="https://brunocroh.com" />
        <meta
          property="og:type"
          content="Hello, I’m Bruno Rodrigues, Fullstack Developer based in Brazil."
        />
        <meta property="fb:app_id" content="" />
        <meta property="og:title" content="Bruno Rodrigues Website and blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello, I’m Bruno Rodrigues!" />
        <meta
          name="twitter:description"
          content="Hello, I’m Bruno Rodrigues, Fullstack Developer based in Brazil."
        />
        <meta name="twitter:site" content="@brunocroh" />
        <meta
          property="og:description"
          content="Hello, I’m Bruno Rodrigues, Fullstack Developer based in Brazil."
        />
        <meta property="og:image" content="https://brunocroh.com/me.jpeg" />
      </Head>
      <body className="bg-black">
        <div className="flex flex-col container mx-xl h-screen p-11">
          <NavBar />
          <main className="flex-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
