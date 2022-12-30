import Head from 'next/head';
import NavPage from '../../../components/all/nav-page';

import ServiceDetailCard from '../../../components/services/serviceDetail/serviceDetailCard';
import CallToAction from '../../../components/services/servicesDetail/callToAction';
import DetailSerivceRealisation from '../../../components/services/servicesDetail/DetailSerivceRealisation';
import EncorePlus from '../../../components/services/servicesDetail/EncorePlus';
import PetitPlus from '../../../components/services/servicesDetail/PetitPlus';
import TitleServiceDetail from '../../../components/services/servicesDetail/TitleServiceDetail';
import Container from '../../../components/shared/composers/container';
import BtnPrimaire from '../../../components/shared/composers/ListriV2/btnPrimaire';
import MyImage from '../../../components/shared/composers/myimage';

const BusinessCard = () => {
  const infoCards = [
    {
      blueBg: true,
      title: 'Responsive',
      subTitle: 'A la pointe du développement',
      description1:
        'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.',

      description2:
        "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal",

      description3: "Simple & efficace, un site avec tout ce qu'il vous faut !",

      description4:
        "Accompagné d'une optimisation pour un référencement naturel",

      src: '/assets/logoV2/website-creator.svg',
    },
    {
      blueBg: false,
      title: 'Responsive',
      subTitle: 'A la pointe du développement',
      description1:
        'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.',

      description2:
        "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal",

      description3: "Simple & efficace, un site avec tout ce qu'il vous faut !",

      description4:
        "Accompagné d'une optimisation pour un référencement naturel",

      src: '/assets/logoV2/website-creator.svg',
    },
    {
      blueBg: true,
      title: 'Responsive',
      subTitle: 'A la pointe du développement',
      description1:
        'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.',

      description2:
        "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal",

      description3: "Simple & efficace, un site avec tout ce qu'il vous faut !",

      description4:
        "Accompagné d'une optimisation pour un référencement naturel",

      src: '/assets/logoV2/website-creator.svg',
    },
  ];
  const cardPlus = [
    {
      categorie: 'gfghf',
      image: '/assets/logoV2/siteWeb.svg',
      ligne1: 'fhgfgh',
      ligne2: 'fhgfhgff',
    },
    {
      categorie: 'fghfhgfhgfghf',
      image: '/assets/logoV2/siteWeb.svg',
      ligne1: 'hgfhgfg',
      ligne2: 'fghfghf',
    },
    {
      categorie: 'hgfghfgh',
      image: '/assets/logoV2/siteWeb.svg',
      ligne1: 'gfhgfgh',
      ligne2: 'ghfghfhg',
    },
  ];
  return (
    <NavPage current="Services">
      <Head>
        <title>
          Digital Business Card - Faites une meilleure première impression
        </title>
        <meta
          name="description"
          content="La meilleure carte de visite pour indépendant et entreprises, faites passer votre réseautage au niveau supérieur.
          Partagez vos informations en un seul tap."
        />
        <meta
          name="keywords"
          content="carte de visite digitale, Carte de visite visrtuelle personnalisée, Carte de visite numérique, Carte de visite virtuelle d’entreprise, profil professionnel en ligne, Créer une carte de visite virtuelle, carte de visite personnelle, listri digital, Carte de visite virtuelle, Digital business card, Digital card"
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
      <main className="bg-white pt-28  text-default">
        <TitleServiceDetail title="Digital business card" />
        <Container className="mx-auto mt-8">
          <MyImage
            source={'/assets/logoV2/Website-creator.svg'}
            h={300}
            w={300}
          />{' '}
        </Container>
        <Container className=" h-[1px] bg-gradient-to-r from-rougeLight via-orangeLight    to-saumon mb-[27px] mx-[25px]" />
        <BtnPrimaire text="Devis gratuit" href="/" />
        <Container className="mt-[87px]">
          <PetitPlus />
        </Container>
        <Container className="mt-[140px]">
          <p className="text-[37px] font-bold leading-[44px] text-darkBlue text-center mb-[40px]">
            un petit +
          </p>
          {infoCards.map((info, i) => {
            const {
              blueBg,
              title,
              subTitle,
              description1,
              description2,
              description3,
              description4,
              src,
            } = info;
            return (
              <ServiceDetailCard
                key={i}
                description1={description1}
                title={title}
                subTitle={subTitle}
                description2={description2}
                description3={description3}
                description4={description4}
                src={src}
                blueBg={blueBg}
              />
            );
          })}
        </Container>
        <div className="my-[100px]">
          <CallToAction />
        </div>
        <div className="mx-[25px] ">
          <EncorePlus EncorePlus={cardPlus} />
        </div>
        <div className="px-[25px] mt-[60px]">
          <DetailSerivceRealisation current="Services" />
        </div>
      </main>
    </NavPage>
  );
};
export default BusinessCard;
