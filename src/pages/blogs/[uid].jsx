import { createClient, linkResolver } from "../../../prismicio";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Container from "../../components/shared/composers/container";
import { SliceZone } from "@prismicio/react";
import { BlogsTest, components } from "../../../slices";
import * as prismicH from "@prismicio/helpers";
import { useState } from "react";
import Head from "next/head";
import NavPage from "../../components/all/nav-page";
import Flex from "../../components/shared/composers/flex";

export default function Blog({ doc }) {
  console.log(doc, "blog");

  return (
    <NavPage current='Blog'>
      <Container>
        <Head>
          <title>
            Listri Agence Digitale - {doc.data.slices[0].items[0].title[0].text}
          </title>
          <meta
            name='description'
            content={`cette articles va vous aider dans: ${doc.data.slices[0].items[0].title[0].text} , réalisé par des expert pour vous !`}
          />
          <link rel='icon' href='/favicon.svg' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <main className='bg-white  pt-28'>
          <Container className='w-full'>
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
