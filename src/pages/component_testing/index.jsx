import Head from 'next/head';
import NavPage from '../../components/all/nav-page';
import ServiceCardV2 from '../../components/shared/composers/ListriV2/serviceCardV2';

import SliderIdentity from '../../components/home/slider/sliderIdentity';

import SliderExperience from '../../components/home/slider/sliderExperience';
// import ServiceHeroV2 from "../../components/services/serviceHeroV2";
// import TitleServiceV2 from "../../components/services/TitleServiceV2";
import BtnPrimaire from '../../components/shared/composers/ListriV2/btnPrimaire';
import { createClient } from '../../../prismicio';
// import HorizontalLoopAnimation from "../../components/home/réalisation";
// import HorizontalAnimationTranslate from "../../components/home/réalisation";
// import HorizontalAnimation from "../../components/home/réalisation";
// import AnimatingDiv from "../../components/home/réalisation";
// import Carousel from "../../components/home/réalisation";
// import ServicesV2 from "../../components/services/ServicesV2";
// import Realisation from "../../components/home/réalisation";
import RealisationLoop from '../../components/home/HomeRealisation/RealisationLoop';
import SliderServices from '../../components/services/SliderServices';
import DetailsPetitPlus from '../../components/services/servicesDetail/PetitPlus';
import EncorePlus from '../../components/services/servicesDetail/EncorePlus';
import PetitPlus from '../../components/services/servicesDetail/PetitPlus';
import CallToAction from '../../components/services/servicesDetail/callToAction';
import DetailSerivceRealisation from '../../components/services/servicesDetail/DetailSerivceRealisation';
import ServiceDetailCard from '../../components/services/serviceDetail/serviceDetailCard';
import Container from '../../components/shared/composers/container';

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
      s
      <main className="bg-white pt-28  text-default mx-[25px]">
        <Container className="space-y-[25px]">
          <ServiceDetailCard
            blueBg={true}
            title={'Responsive'}
            subTitle={'A la pointe du développement'}
            description1={
              'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.'
            }
            description2={
              'Un affichage adapté à toutes les tailles d’écrans, afin d’avoir un rendu optimal'
            }
            description3={
              'Simple & efficace, un site avec tout ce qu’il vous faut !'
            }
            description4={
              'Accompagné d’une optimisation pour un référencement naturel'
            }
            src={'/assets/logoV2/website-creator.svg'}
          />
          <ServiceDetailCard
            blueBg={true}
            title={'Responsive'}
            subTitle={'A la pointe du développement'}
            description1={
              'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.'
            }
            description2={
              'Un affichage adapté à toutes les tailles d’écrans, afin d’avoir un rendu optimal'
            }
            description3={
              'Simple & efficace, un site avec tout ce qu’il vous faut !'
            }
            description4={
              'Accompagné d’une optimisation pour un référencement naturel'
            }
            src={'/assets/logoV2/website-creator.svg'}
          />
          <ServiceDetailCard
            blueBg={true}
            title={'Responsive'}
            subTitle={'A la pointe du développement'}
            description1={
              'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.'
            }
            description2={
              'Un affichage adapté à toutes les tailles d’écrans, afin d’avoir un rendu optimal'
            }
            description3={
              'Simple & efficace, un site avec tout ce qu’il vous faut !'
            }
            description4={
              'Accompagné d’une optimisation pour un référencement naturel'
            }
            src={'/assets/logoV2/website-creator.svg'}
          />
          <ServiceDetailCard
            blueBg={false}
            title={'Responsive'}
            subTitle={'A la pointe du développement'}
            description1={
              'Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.'
            }
            description2={
              'Un affichage adapté à toutes les tailles d’écrans, afin d’avoir un rendu optimal'
            }
            description3={
              'Simple & efficace, un site avec tout ce qu’il vous faut !'
            }
            description4={
              'Accompagné d’une optimisation pour un référencement naturel'
            }
            src={'/assets/logoV2/website-creator.svg'}
          />
        </Container>
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
        <BtnPrimaire text={'Nos Services'} href={'/'} />
        <SliderExperience />
        <RealisationLoop />
        <SliderServices />
        <PetitPlus />
        <EncorePlus />
        <CallToAction />
        <DetailSerivceRealisation />
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
