import Head from 'next/head';
import NavPage from '../../components/all/nav-page';
import Container from '../../components/shared/composers/container';

import ClientList from '../../components/client/clientList';
import { createClient } from '../../../prismicio';
import { useState } from 'react';
import FilterClient from '../../components/client/filterClient';
import ServiceTitle from '../../components/services/serviceTitle';
import SliderServicesCard from '../../components/services/SliderServices/SliderServicesCard';
import RealisationLabelSlider from '../../components/realisation/realisationLabelSlider';
import RealisationList from '../../components/realisation/realisationList';

const Realisation = ({ realisations }) => {
  const titlepageprops = {
    title: 'Réalisation',
    subtitle: '',
    description:
      'Tout ce qu’il vous faut pour découvrir et comprendre le monde du digital 3.0 Restez à jour avec listri',
  };
  const [filterValue, setFilterValue] = useState('all');
  const [newProductList, setNewProductList] = useState(realisations);

  function onFilterValueSelected(filterValue) {
    setFilterValue(filterValue);
  }
  const filteredProductList = newProductList.filter((realisation) => {
    if (filterValue === 'all') {
      return realisation;
    }
    if (filterValue === realisation?.data.slices[0].primary.serviceCategorie) {
      return realisation;
    }
  });

  console.log('realisations', realisations);

  return (
    <NavPage current="Réalisations">
      <Head>
        <title>Nos réalisations - Nous rendons votre projet unique</title>
        <meta
          name="description"
          content="Votre site web est le premier support de communication consultée par un prospect.
          Découvrez ceux qui nous font confiance et pourquoi vous devriez aussi."
        />
        <meta
          name="keywords"
          content="réalisations site web, projets, nos partenaires, nos projets, Nos réalisations, cas clients, réussites, partenaires, listri digital, portfolio, exemples de réussite, clients satisfaits"
        />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Container className=" py-28 mx-[25px]">
          <ServiceTitle
            subtitle1={'Réalisation.'}
            subtitle2={
              'Du site web au marketing recevez le service que vous aimez '
            }
          />
          <Container className="mt-[30px] mb-[50px]">
            <RealisationLabelSlider />
          </Container>

          <Container className="mb-10 mx-auto md:max-w-[1600px] ">
            {/* <FilterClient filterValueSelected={onFilterValueSelected} /> */}
            <RealisationList realisations={filteredProductList} />
          </Container>
        </Container>
      </main>
    </NavPage>
  );
};
export default Realisation;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const realisations = await client.getAllByType('realisation-client', {
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  });

  return {
    props: {
      realisations,
    },
  };
}
