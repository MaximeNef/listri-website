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
import Link from "next/link";
import Cardblog from "../components/blog/CardBlog";

export default function Home({ articles, blogs }) {
  console.log(articles, "BLABLA");
  return (
    <NavPage current='Accueil'>
      <Head>
        <title>Boostez votre PME avec un site web & du marketing digital</title>
        <meta
          name='description'
          content='🚀 Augmentez votre visibilité avec la création de votre site web sur-mesure ! Contactez notre agence digitale spécialisée en développement web et marketing.'
        />
        <meta
          name='google-site-verification'
          content='SiiyWySS-E4LEBuJc9YlARLPC0yJzhi4h3vjZZ7rmSk'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-white pt-28  text-[#37474F]'>
        <Hero /> <ServiceHero />
        {/* <ClientHero /> */}
        {/* <Process />  */}
        <Processherotry />
        <BlogHero blogs={blogs} />
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
