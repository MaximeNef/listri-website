import { createClient } from '../../../prismicio';
import Head from 'next/head';
import NavPage from '../../components/all/nav-page';
import ServiceCardV2 from '../../components/shared/composers/ListriV2/serviceCardV2';

const ComponentTesting = ({ blogs }) => {
  return (
    <NavPage current="Team">
      <Head>
        <title>
          Vos spécialistes dans la création de site web & marketing digital
        </title>
        <meta
          name="description"
          content="Plus qu'une agence, Listri vous accompagne dans la digitalisation grâce à ses experts passionnés de leurs domaines pour vous obtenir les meilleurs résultats"
        />
        <meta
          name="keywords"
          content="équipe, membres, notre équipe, la team, expertises, listri digital, experts digital, nos experts, collaborateurs, équipe d’experts"
        />
        <meta charset="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />{' '}
      </Head>

      <main className="bg-white pt-28  text-default mx-[25px]">
        <ServiceCardV2
          title={'Référencement'}
          subtitle={
            'This holiday season, find the perfect gift for everyone on your list.'
          }
          linkText={'Découvrir'}
          href={'/'}
          imgSrc={'/assets/logoV2/digital-card.svg'}
          blueBg={true}
        />
        <ServiceCardV2
          title={'Référencement'}
          subtitle={
            'This holiday season, find the perfect gift for everyone on your list.'
          }
          linkText={'Découvrir'}
          href={'/'}
          imgSrc={'/assets/logoV2/digital-card.svg'}
          blueBg={''}
        />
        <ServiceCardV2
          title={'Référencement'}
          subtitle={
            'This holiday season, find the perfect gift for everyone on your list.'
          }
          linkText={'Découvrir'}
          href={'/'}
          imgSrc={'/assets/logoV2/digital-card.svg'}
          blueBg={true}
        />
      </main>
    </NavPage>
  );
};
export default ComponentTesting;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getAllByType('BlogPost', {
    orderings: [
      { field: 'my.article.publishDate', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  });

  return {
    props: {
      blogs,
    },
  };
}
