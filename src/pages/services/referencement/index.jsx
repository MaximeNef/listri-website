import Head from "next/head";
import NavPage from "../../../components/all/nav-page";
import ServiceDetailCard from "../../../components/services/serviceDetail/serviceDetailCard";
import CallToAction from "../../../components/services/servicesDetail/callToAction";
import DetailSerivceRealisation from "../../../components/services/servicesDetail/DetailSerivceRealisation";
import EncorePlus from "../../../components/services/servicesDetail/EncorePlus";
import PetitPlus from "../../../components/services/servicesDetail/PetitPlus";
import TitleServiceDetail from "../../../components/services/servicesDetail/TitleServiceDetail";
import Container from "../../../components/shared/composers/container";
import BtnPrimaire from "../../../components/shared/composers/ListriV2/btnPrimaire";
import MyImage from "../../../components/shared/composers/myimage";

const Referencement = () => {
  const cardPlus = [
    {
      categorie: "+ de trafic",
      image: "/assets/logoV2/trafic-white.svg",
      ligne1: "Un référencement optimisé",
      ligne2: "attire du trafic de qualité.",
    },
    {
      categorie: "+ de conversion",
      image: "/assets/logoV2/performent.svg",
      ligne1: "Un site correctement ",
      ligne2: "référencé converti plus",
    },
    {
      categorie: "+ de visibilité",
      image: "/assets/logoV2/visibilite-white.svg",
      ligne1: "Google montre plus souvent",
      ligne2: "un site bien référencé. ",
    },
    {
      categorie: "- d’argent dépensé",
      image: "/assets/logoV2/Moinsdepenses.svg",
      ligne1: "Un site référencé",
      ligne2: "nécessite moins de publicité.",
    },
  ];
  const infoCards = [
    {
      blueBg: true,
      title: "Visibilité",
      subTitle: "A la pointe du développement",
      description1:
        "La visibilité, la notoriété et la popularité sont des éléments clés dans le monde du référencement.",

      description2:
        "En effet, plus votre site web est visible sur internet, plus vous avez de chances d'attirer de nouveaux visiteurs & de développer votre audience.",

      description3:
        "Notre service de référencement vous permet d'atteindre de nouveaux sommets de visibilité sur les moteurs de recherche.",

      description4:
        "De plus, une meilleure présence en ligne peut contribuer à une augmentation du trafic et des conversions.",
      description5:
        "En somme, la visibilité, la notoriété et la popularité sont des éléments essentiels pour tout site web qui souhaite se démarquer et performer sur internet.",

      src: "/assets/logoV2/visibility-animate.svg",
    },
    {
      blueBg: false,
      title: "Trafic",
      subTitle: "A la pointe du développement",
      description1: "Le trafic est un élément crucial du référencement.",
      description2:
        "Un bon référencement permet au site Web d'accroître le trafic organique, c'est-à-dire le trafic provenant de moteurs de recherche.",
      description3:
        "Pour cela, il est nécessaire d'utiliser des techniques de référencement, telles que l'optimisation des mots clés, l'optimisation des contenus, l'acquisition de liens, le développement de contenus pertinents et la création de liens entrants.",

      src: "/assets/logoV2/trafic-animate.svg",
    },
    {
      blueBg: true,
      title: "Crédibilité",
      subTitle: "A la pointe du développement",
      description1:
        "La crédibilité est un élément clé pour le référencement. C'est ce qui fait la différence entre un site web qui a un bon classement et un site qui est ignoré par les moteurs de recherche. ",

      description2:
        "Une bonne crédibilité signifie que votre site web est considéré comme digne de confiance par les moteurs de recherche et qu'il est légitime. Les moteurs de recherche vérifient le contenu et les liens vers et depuis votre site web, et seuls les sites dignes de confiance auront le meilleur classement. ",

      description3:
        "Par conséquent, pour obtenir un bon classement, le service de référencement doit vous aider à construire une bonne réputation et à développer votre crédibilité sur le web.",

      src: "/assets/logoV2/security-animate.svg",
    },
  ];
  const info = [
    {
      img: "/assets/logoV2/traficR.svg",
      text: "+ de trafic",
    },

    {
      img: "/assets/logoV2/visibilite-black.svg",
      text: "+ de visibilité",
    },
    {
      img: "/assets/logoV2/performent.svg",
      text: "+ de conversion",
    },
    {
      img: "/assets/logoV2/Moinsdepenses.svg",
      text: "- d’argent dépensé",
    },
  ];
  return (
    <NavPage current='Services'>
      <Head>
        <title>
          Agence N°1 - Référencement naturel, SEO, SEA de votre site web
        </title>
        <meta
          name={"description"}
          content='Boostez votre référencement avec notre équipe experte en SEO, SEA, SMO, SMA !
          Spécialiste en référencement, on place nos clients en 1ère page !
          Demandez votre audit gratuit'
        />
        <meta
          name='keywords'
          content='référencement, référencement naturel, optimisation de référencement, référencement local, audit de référencement, stratégie de référencement, suivi de référencement, listri digital, SEO, SERP, mots-clés, backlinks, meta tags, SEA, SMO, SMA'
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
        <div className='flex justify-center items-center'>
          <TitleServiceDetail title='Référencement' />
          <Container className='mx-auto mt-8 hidden md:inline-flex md:w-1/3 '>
            <MyImage
              source={"/assets/logoV2/referencement-animate.svg"}
              h={500}
              w={500}
            />
          </Container>
        </div>

        <Container className='mx-auto mt-8 md:hidden '>
          <MyImage
            source={"/assets/logoV2/referencement-animate.svg"}
            h={300}
            w={300}
          />
        </Container>
        <Container className=' h-[1px] bg-gradient-to-r from-rougeLight via-orangeLight    to-saumon mb-[27px] mx-[25px]' />
        <BtnPrimaire text='Devis gratuit' href='/' />
        <Container className='mt-[87px]'>
          <PetitPlus info={info} />
        </Container>
        <Container className='mt-[140px]'>
          <p className='text-[37px] font-bold leading-[44px] text-darkBlue text-center mb-[40px]  mx-10'>
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
export default Referencement;
