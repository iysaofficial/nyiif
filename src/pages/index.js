import Head from "next/head";
import { Inter } from "next/font/google";

import Navigation from "@/components/navigation";
import { Mainhero } from "@/components/Mainhero";
import { Organized } from "@/components/organized";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import Services from "@/components/services";
import Afterevent from "@/components/afterevent";
import Contact from '@/components/contact';
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>NYIIF OFFICIAL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <Mainhero />
      <Organized />
      <About />
      <Process />
      <Services />
      <Afterevent />
      <Contact />
      <Footer />
    </>
  );
}