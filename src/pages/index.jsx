import Head from "next/head";
import Image from "next/image";
import MaxWidth from "../components/all/max-width";
import NavPage from "../components/all/nav-page";
import Hero from "../components/hero";
import BlogHero from "../components/hero/blogHero";
import ClientHero from "../components/hero/clientHero";
import { useState } from "react";
import { motion } from "framer-motion";
import ServiceHero from "../components/hero/serviceHero";
import Container from "../components/shared/composers/container";
import Process from "../components/hero/process";
import { createClient } from "../../prismicio";
import Processherotry from "../components/hero/processHero";
import Script from "next/script";

export default function Home({ articles, blogs }) {
  console.log(articles, "BLABLA");
  return (
    <NavPage current='Accueil'>
      <Head>
        <title>Listri Agence Digitale - Home</title>
        <meta
          name='Generated by Listri'
          content='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-[#FFFAF5] pt-28  text-[#37474F]'>
        <Hero /> <ServiceHero />
        {/* <ClientHero /> */}
        {/* <Process />  */}
        <Processherotry />
        {/* <BlogHero blogs={blogs} /> */}
      </main>
    </NavPage>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getAllByType("BlogPost", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      blogs,
    },
  };
}
