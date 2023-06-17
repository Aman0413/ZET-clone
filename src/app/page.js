import Image from "next/image";
import Link from "next/link";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import AboutHero from "./componets/AboutHero";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}
