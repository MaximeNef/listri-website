import { createClient, linkResolver } from "../../../prismicio";
import Container from "../../components/shared/composers/container";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";
import NavPage from "../../components/all/nav-page";
import DetailSerivceRealisation from "../../components/services/servicesDetail/DetailSerivceRealisation";
export default function Realisation({ projet }) {
  return (
    <NavPage current='Réalisations'>
      <Container>
        <Head>
          <title>{projet.data.slices[0].primary.metatitle[0]?.text}</title>
          <meta
            name='description'
            content={`découvrez notre réalisation sur ${projet.data.slices[0].primary.metadescription[0]?.text}`}
          />
          <meta
            name='keywords'
            content='réseaux sociaux, stratégie de réseaux sociaux, gestion de réseaux sociaux, community management, publicité sur les réseaux sociaux, contenu pour les réseaux sociaux, analyse de réseaux sociaux, engagement sur les réseaux sociaux, listri digital, Social media marketing, Marketing réseaux sociaux'
          />
          <meta charset='UTF-8' />
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
            <SliceZone slices={projet.data.slices} components={components} />
          </Container>
          <div className='px-[25px] mt-[60px]'>
            <DetailSerivceRealisation current='Services' />
          </div>
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
