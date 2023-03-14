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

const Website = () => {
  const info = [
    {
      img: "/assets/logoV2/visibilite.svg",
      text: "Plus de visibilité",
    },

    {
      img: "/assets/logoV2/ciblage.svg",
      text: "Ciblage précis",
    },
    {
      img: "/assets/logoV2/relation.svg",
      text: "Meilleure relation client",
    },
    {
      img: "/assets/logoV2/analysePc.svg",
      text: "Analyse sur-mesure",
    },
  ];
  const infoCards = [
    {
      blueBg: true,
      title: "Visibilité",
      subTitle: "Présence en ligne améliorée",
      description1:
        "La visibilité est un élément essentiel pour une entreprise.",

      description2:
        "Avec une bonne visibilité, l’entreprise peut atteindre plus de clients et augmenter sa notoriété.",

      description3:
        "permettant ainsi de générer plus de trafic vers le site Web, ce qui à son tour conduit à une augmentation des conversions et des ventes.",

      description4:
        "La visibilité est une partie importante de toute campagne de marketing digital et peut être obtenue à l'aide d'une variété de techniques, notamment le référencement, les médias sociaux, le mail marketing ou encore la publicité en ligne.",

      src: "/assets/logoV2/visibility-animate.svg",
    },
    {
      blueBg: false,
      title: "Engagement",
      subTitle: "Interaction & fidélisation de la communauté ",
      description1: "L'engagement est un élément clé du marketing digital. ",

      description2:
        "Il s'agit de la mesure de la quantité et de la qualité de l'interaction entre une marque et ses clients. ",

      description3:
        "L'engagement est un moyen pour les marques de comprendre leurs clients et de leur offrir des produits et des services pertinentes. ",

      description4:
        "Pour les entreprises qui utilisent le marketing digital, l'engagement est essentiel car il permet de développer une relation et une connexion plus profonde avec leurs clients.",

      src: "/assets/logoV2/engagement-animate.svg",
    },
    {
      blueBg: true,
      title: "Ciblage",
      subTitle: "audience adaptée, résultat précis",
      description1:
        "Le ciblage est une partie très importante du marketing digital. ",

      description2:
        "Il s'agit d’une stratégie qui permet de cibler les consommateurs les plus susceptibles d'être intéressés par votre produit ou service, en fonction de leurs intérêts et de leur comportement en ligne. ",

      description3:
        "En utilisant des techniques sophistiquées de ciblage, vous pouvez atteindre votre public cible avec une précision et une efficacité accrues. ",

      description4:
        "Le ciblage est très important pour le marketing digital car il permet d'atteindre les bonnes personnes au bon moment et d'augmenter la visibilité et le ROI de votre campagne.",

      src: "/assets/logoV2/ciblage-animate.svg",
    },
    {
      blueBg: false,
      title: "Conversion",
      subTitle: "Amélioration des résultats commerciaux",
      description1:
        "La conversion est un terme clé utilisé pour décrire le processus par lequel un consommateur passe d'un prospect à un client. ",

      description2:
        "Une conversion se produit lorsqu'un utilisateur réalise l'une des actions souhaitées, telles que s'inscrire à une newsletter, acheter un produit, partager un contenu ou télécharger une application. ",

      description3:
        "Nous pouvons créer une variété de campagnes axées sur la conversion pour générer des leads et des ventes, en ciblant les bonnes personnes à travers les canaux numériques. ",

      description4:
        "Les outils et services de marketing digital peuvent être utilisés pour cibler le bon public, créer des campagnes efficaces et améliorer le taux de conversion.",

      src: "/assets/logoV2/conversion-animate.svg",
    },
  ];
  const cardPlus = [
    {
      categorie: "+ de visibilité",
      image: "/assets/logoV2/visibilite-white.svg",
      ligne1: "Exposez votre marque",
      ligne2: "à une large audience.",
    },
    {
      categorie: "Ciblage précis",
      image: "/assets/logoV2/ciblage.svg",
      ligne1: "Ciblez votre audience",
      ligne2: "avec précision.",
    },
    {
      categorie: "Meilleure relation client",
      image: "/assets/logoV2/relation-white.svg",
      ligne1: "Interagissez instantanément",
      ligne2: "avec votre communauté.",
    },
    {
      categorie: "Analyse sur-mesure",
      image: "/assets/logoV2/analysePc.svg",
      ligne1: "Analysez toutes les données",
      ligne2: "et faites des choix avisés.",
    },
    {
      categorie: "Analyse sur-mesure",
      image: "/assets/logoV2/analysePc-white.svg",
      ligne1: "Comprenez le fonctionnement",
      ligne2: "de votre communauté.",
    },
  ];

  return (
    <NavPage current='Services'>
      <Head>
        <title>Votre agence spécialisée en social media marketing </title>
        <meta
          name='description'
          content='Nous aidons les indépendants et les PME à développer une communication digitale sur les réseaux sociaux pour ciblez la bonne audience.'
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
      <main className='bg-white pt-28  text-default'>
        <div className='flex justify-center items-center'>
          {" "}
          <TitleServiceDetail title='Marketing' title2='digital' />
          <Container className='mx-auto mt-8 hidden md:inline-flex md:w-1/3 '>
            <MyImage
              source={"/assets/logoV2/social-dashboard.svg"}
              h={500}
              w={500}
            />
          </Container>
        </div>

        <Container className='mx-auto mt-8 md:hidden '>
          <MyImage
            source={"/assets/logoV2/social-dashboard.svg"}
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
          <div className='md:flex-wrap md:flex'>
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
                <div
                  key={i}
                  className={`${i == 0 || i == 3 ? "md:w-1/3" : "md:w-2/3"}`}
                >
                  <ServiceDetailCard
                    key={i}
                    i={i}
                    description1={description1}
                    title={title}
                    subTitle={subTitle}
                    description2={description2}
                    description3={description3}
                    description4={description4}
                    src={src}
                    blueBg={blueBg}
                  />
                </div>
              );
            })}
          </div>
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
export default Website;
