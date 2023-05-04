import Head from "next/head";
import NavPage from "../../components/all/nav-page";
import Container from "../../components/shared/composers/container";
import { createClient } from "../../../prismicio";
import { useState } from "react";
import ServiceTitle from "../../components/services/serviceTitle";
import RealisationLabelSlider from "../../components/realisation/realisationLabelSlider";
import RealisationList from "../../components/realisation/realisationList";
import DetailSerivceRealisation from "../../components/services/servicesDetail/DetailSerivceRealisation";
const Realisation = ({ realisations }) => {
  const [allRealisations, setAllRealisations] = useState(realisations);
  const [filterRealisation, setFilterRealisation] = useState("all");

  const newRealisationList = allRealisations.filter((realisation) => {
    if (filterRealisation == "all") {
      return realisation;
    }

    if (
      realisation?.data.slices[0].primary.serviceCategorie == filterRealisation
    ) {
      return realisation;
    }
  });

  return (
    <NavPage current='Réalisations'>
      <Head>
        <title>Nos réalisations - Nous rendons votre projet unique</title>
        <meta
          name='description'
          content='Votre site web est le premier support de communication consultée par un prospect.
          Découvrez ceux qui nous font confiance et pourquoi vous devriez aussi.'
        />
        <meta
          name='keywords'
          content='réalisations site web, projets, nos partenaires, nos projets, Nos réalisations, cas clients, réussites, partenaires, listri digital, portfolio, exemples de réussite, clients satisfaits'
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
      <main className='bg-white  text-default '>
        <Container className='md:mx-[95px] pt-28 pb-14 mx-[25px]'>
          <ServiceTitle
            subtitle1={"Nos réalisation."}
            subtitle2={
              "Des réalisations uniques pour des clients qui le sont tout autant."
            }
          />
          <Container className='mt-[30px] mb-[50px]'>
            <RealisationLabelSlider
              filterRealisation={filterRealisation}
              setFilterRealisation={setFilterRealisation}
            />
          </Container>

          <Container >
            <RealisationList realisations={newRealisationList} />
          </Container>
        </Container>{" "}
        <div className='px-[25px] mt-[60px]'>
          <DetailSerivceRealisation current='Services' />
        </div>
      </main>
    </NavPage>
  );
};
export default Realisation;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const realisations = await client.getAllByType("realisation-client", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      realisations,
    },
  };
}
