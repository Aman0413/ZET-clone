import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale-1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
