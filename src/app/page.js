import Image from "next/image";
import Link from "next/link";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import AboutHero from "./componets/AboutHero";
import Layout from "./componets/Layout";
import HomeCom from "./componets/HomeCom";

export default function Home() {
  return (
    <>
      <Layout
        title={"ZET : Become a Certified Financial Advisor and Earn Big"}
        children={<HomeCom />}
      />
    </>
  );
}
