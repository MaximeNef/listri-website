import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";
import ServiceDetailCard from "../../../components/services/serviceDetail/serviceDetailCard";
import CallToAction from "../../../components/services/servicesDetail/callToAction";
import DetailSerivceRealisation from "../../../components/services/servicesDetail/DetailSerivceRealisation";
import EncorePlus from "../../../components/services/servicesDetail/EncorePlus";
import PetitPlus from "../../../components/services/servicesDetail/PetitPlus";
import TitleServiceDetail from "../../../components/services/servicesDetail/TitleServiceDetail";
import BtnPrimaire from "../../../components/shared/composers/ListriV2/btnPrimaire";
import MyImage from "../../../components/shared/composers/myimage";

const OptimisationWeb = () => {
  const info = [
    {
      img: "/assets/logoV2/analysePc.svg",
      text: "Analyse des données",
    },

    {
      img: "/assets/logoV2/expUser.svg",
      text: "Meilleure expérience utilisateur",
    },
    {
      img: "/assets/logoV2/graph.svg",
      text: "Amélioration des performances",
    },
    {
      img: "/assets/logoV2/performent.svg",
      text: "Augmentation des conversions",
    },
  ];
  const infoCards = [
    {
      blueBg: true,
      title: "Expérience utilisateur ",
      subTitle: "Optimisé pour de meilleurs résultats",
      description1:
        "la réussite d'un service d'optimisation web passe par l'expérience utilisateur.",

      description2:
        "Lorsque les utilisateurs interagissent avec un site web, ils cherchent une expérience fluide et intuitive.",

      description3:
        "une bonne optimisation web peut contribuer à améliorer leurs interactions.",

      description4:
        "Une optimisation web bien conçue peut aider à fournir une navigation facile et des temps de chargement plus courts. ",
      description5:
        "Notre service d'optimisation web améliore également  la sécurité et la stabilité du site web, se qui  encourage les utilisateurs à revenir régulièrement.",

      src: "/assets/logoV2/exp-utilisateur-animate.svg",
    },
    {
      blueBg: false,
      title: "Analyse",
      subTitle: "Compréhension simplifiée des données",
      description1:
        "Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.",

      description2:
        "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal",

      description3: "Simple & efficace, un site avec tout ce qu'il vous faut !",

      description4:
        "Accompagné d'une optimisation pour un référencement naturel",

      src: "/assets/logoV2/analyse-animate.svg",
    },
    {
      blueBg: true,
      title: "Conversion",
      subTitle: "Amélioration des résultats commerciaux",
      description1:
        "Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique.",

      description2:
        "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal",

      description3: "Simple & efficace, un site avec tout ce qu'il vous faut !",

      description4:
        "Accompagné d'une optimisation pour un référencement naturel",

      src: "/assets/logoV2/conversion-animate.svg",
    },
  ];
  const cardPlus = [
    {
      categorie: "Analyse des données",
      image: "/assets/logoV2/analysePc-white.svg",
      ligne1: "Suivi des visiteurs pour",
      ligne2: "des données pertinentes.",
    },
    {
      categorie: "Amélioration des performances",
      image: "/assets/logoV2/graph.svg",
      ligne1: "De meilleures performances",
      ligne2: " pour un site plus rapide.",
    },
    {
      categorie: "Meilleure expérience utilisateur",
      image: "/assets/logoV2/expUser-white.svg",
      ligne1: "Une navigation plus simple",
      ligne2: "et moins de frustration.",
    },
    {
      categorie: "Augmentation des conversions",
      image: "/assets/logoV2/performent.svg",
      ligne1: "Chemin du visiteur optimisé",
      ligne2: "pour la conversion.",
    },
  ];
  return (
    <NavPage current='Services'>
      <Head>
        <title>Optimisez votre site pour un meilleur référencement</title>
        <meta
          name='description'
          content='Listri s’occupe d’optimiser votre site en pour que vous restiez compétitif.
          L’optimisation continue adapte votre site à la navigation de vos clients..'
        />
        <meta
          name='keywords'
          content="optimisation web, performance web, vitesse de chargement, optimisation des images, optimisation du code, optimisation du référencement, listri digital, optimisation de la vitesse, optimisation du SEO, optimisation de l'expérience utilisateur, optimisation UI UX, optimisation pour les moteurs de recherche, stratégie d'optimisation web"
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
      <main className='bg-white pt-28  text-default'>
        <TitleServiceDetail title='Optimisation web' />
        <Container className='mx-auto mt-8'>
          <MyImage
            source={"/assets/logoV2/optimisation-animate.svg"}
            h={300}
            w={300}
          />{" "}
        </Container>
        <Container className=' h-[1px] bg-gradient-to-r from-rougeLight via-orangeLight    to-saumon mb-[27px] mx-[25px]' />
        <BtnPrimaire text='Devis gratuit' href='/' />
        <Container className='mt-[87px]'>
          <PetitPlus info={info} />
        </Container>
        <Container className='mt-[140px]'>
          <p className='text-[37px] font-bold leading-[44px] text-darkBlue text-center mb-[40px] mx-10'>
            <p> Recevez</p>
            <p>une expérience,</p>
            <p>complète</p>
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
              description5,
              src,
            } = info;
            return (
              <ServiceDetailCard
                key={i}
                i={i}
                description1={description1}
                title={title}
                subTitle={subTitle}
                description2={description2}
                description3={description3}
                description4={description4}
                description5={description5}
                src={src}
                blueBg={blueBg}
              />
            );
          })}
        </Container>
        <div className='my-[100px]'>
          <CallToAction />
        </div>
        <div className='mx-[25px] '>
          <EncorePlus EncorePlus={cardPlus} />
        </div>
        <div className='px-[25px] mt-[60px]'>
          <DetailSerivceRealisation current='Services' />
        </div>
      </main>
    </NavPage>
  );
};
export default OptimisationWeb;
