import Head from 'next/head';
import NavPage from '../../components/all/nav-page';
import ServiceTitleV2 from '../../components/services/serviceTitleV2';

const ComponentTesting = () => {
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

      <main className="bg-white pt-28  text-[#37474F]">
        <ServiceTitleV2
          title={'Création de site web'}
          subtitle={'Rapide et sur mesure'}
          linkText={'Découvrir'}
          href={'/'}
          textWhite={false}
        />
      </main>
    </NavPage>
  );
};
export default ComponentTesting;