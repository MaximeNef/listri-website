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

export default function Realisation({ projet }) {
  console.log(projet, "realisation");

  return (
    <NavPage current='Réalisations'>
      <Container>
        <Head>
          <title>{projet.data.slices[0].primary.metatitle[0]?.text}</title>
          <meta
            name='description'
            content={`cette articles va vous aider dans: ${projet.data.slices[0].primary.metadescription[0]?.text}`}
          />
          <link rel='icon' href='/favicon.svg' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <script>
            UST_CT = []; UST ={" "}
            {{
              s: Date.now(),
              addTag: function (tag) {
                UST_CT.push(tag);
              },
            }}
            ;UST.addEvent = UST.addTag;
          </script>
          <script
            src='https://stats.listri.digital/server/ust.min.js?v=3.5.3'
            async
          ></script>
        </Head>
        <main className='bg-white  pt-28'>
          <Container className='w-full'>
            <SliceZone slices={projet.data.slices} components={components} />
          </Container>
        </main>
      </Container>
    </NavPage>
  );
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("realisation-client");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),

    fallback: false,
  };
}
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const projet =
    (await client.getByUID("realisation-client", params.uid)) || {};

  return {
    props: {
      projet,
    },
  };
}