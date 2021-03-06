import { createClient, linkResolver } from "../../../prismicio";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Container from "../../components/shared/composers/container";
import { SliceZone } from "@prismicio/react";
import { BlogsTest, components } from "../../../slices";
import * as prismicH from "@prismicio/helpers";
import { useState } from "react";
import Head from "next/head";
import NavPage from "../../components/all/nav-page";

export default function Blog({ doc }) {
  console.log(doc, "blog");

  return (
    <NavPage current='Blog'>
      <Container>
        <Head>
          <title>Listri Agence Digitale</title>
          <meta
            name='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
            content='Generated by Listri'
          />
          <link rel='icon' href='/favicon.svg' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <main className='bg-[#FFFAF5]  pt-28'>
          <Container>
            <SliceZone slices={doc.data.slices} components={components} />
          </Container>
        </main>
      </Container>
    </NavPage>
  );
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("BlogPost");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),

    fallback: false,
  };
}
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const doc = (await client.getByUID("BlogPost", params.uid)) || {};

  return {
    props: {
      doc,
    },
  };
}
