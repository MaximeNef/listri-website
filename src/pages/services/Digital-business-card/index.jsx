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

const BusinessCard = () => {
  const info = [
    {
      img: "/assets/logoV2/accessible.svg",
      text: "Accessible 24/7",
    },

    {
      img: "/assets/logoV2/ciblage.svg",
      text: "Présentation professionnelle",
    },
    {
      img: "/assets/logoV2/relation.svg",
      text: "Mise à jour facile",
    },
    {
      img: "/assets/logoV2/analysePc.svg",
      text: "Partageable instantanément",
    },
  ];
  const infoCards = [
    {
      blueBg: true,
      title: "Personnalisable",
      subTitle: "Identité visuelle unique & design original",
      description1:
        "Notre service de digital business card vous offre la possibilité de créer et de personnaliser votre carte de visite numérique. ",

      description2:
        "Vous pouvez ajouter des informations supplémentaires, telles que des liens vers vos réseaux sociaux ou vos profils professionnels. ",

      description3:
        "Enfin, le service peut être intégré à des outils de partage de contacts afin que les utilisateurs puissent facilement partager leur carte de visite numérique avec d'autres.",

      src: "/assets/logoV2/personnalisable-animate.svg",
    },
    {
      blueBg: false,
      title: "Économique",
      subTitle: "A la pointe du développement",
      description1:
        "Le service de digital business card offre à votre entreprise une solution économique pour réduire vos coûts d'impression et de distribution de cartes de visite. ",

      description2:
        "Il vous permet de créer une carte de visite virtuelle et de la partager facilement par e-mail, SMS ou réseaux sociaux. ",

      description3:
        "En tant qu’entreprise vous pouvez ainsi économiser des coûts liés à l'impression et à la distribution de cartes de visite, tout en bénéficiant d'un service intuitif et personnalisable.",

      src: "/assets/logoV2/economique.svg",
    },
    {
      blueBg: true,
      title: "Pratique",
      subTitle: "A la pointe du développement",
      description1:
        "Le service de digital business card est un outil pratique pour les professionnels qui souhaitent optimiser leur image de marque et communiquer de manière professionnelle et efficace.",

      description2:
        "Ces cartes de visite numériques sont faciles à partager et à gérer, ce qui en fait un outil pratique pour les entreprises et les particuliers.",

      src: "/assets/logoV2/pratique-animate.svg",
    },
    {
      blueBg: true,
      title: "Écologique",
      subTitle: "A la pointe du développement",
      description1:
        "Le service de carte de visite digitale offre une alternative écologique à l'impression et à l'envoi de cartes de visite en papier. ",

      description2:
        "Les cartes de visite numériques sont écologiques car elles ne nécessitent pas de papier ni d'encre et peuvent être partagées facilement, ce qui réduit la consommation de ressources et les déchets. ",

      description3:
        "En outre, les cartes de visite digitales sont plus faciles à mettre à jour et à modifier qu'elles ne le sont en papier, ce qui signifie que les informations peuvent être mises à jour rapidement et sans gaspiller de papier.",

      src: "/assets/logoV2/ecologique-animate.svg",
    },
  ];
  const cardPlus = [
    {
      categorie: "Accessible 24/7",
      image: "/assets/logoV2/accessible-white.svg",
      ligne1: "Peu importe où et",
      ligne2: "peu importe l’appareil.",
    },
    {
      categorie: "Présentation professionnelle",
      image: "/assets/logoV2/presentation.svg",
      ligne1: "Une carte au design",
      ligne2: "qui vous correspond.",
    },
    {
      categorie: "Mise à jour facile",
      image: "/assets/logoV2/maj-white.svg",
      ligne1: "Modifiez votre carte à tout ",
      ligne2: "moment et rapidement.",
    },
    {
      categorie: "Partageable instantanément",
      image: "/assets/logoV2/partage.svg",
      ligne1: "Envoyez votre carte digitale",
      ligne2: "en un clic.",
    },
  ];
  return (
    <NavPage current='Services'>
      <Head>
        <title>
          Digital Business Card - Faites une meilleure première impression
        </title>
        <meta
          name='description'
          content='La meilleure carte de visite pour indépendant et entreprises, faites passer votre réseautage au niveau supérieur.
          Partagez vos informations en un seul tap.'
        />
        <meta
          name='keywords'
          content='carte de visite digitale, Carte de visite visrtuelle personnalisée, Carte de visite numérique, Carte de visite virtuelle d’entreprise, profil professionnel en ligne, Créer une carte de visite virtuelle, carte de visite personnelle, listri digital, Carte de visite virtuelle, Digital business card, Digital card'
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
          <TitleServiceDetail title='Digital business card' />
          <Container className='mx-auto mt-8 hidden md:inline-flex md:w-1/3 '>
            <MyImage
              source={"/assets/logoV2/digital-card-animate.svg"}
              h={500}
              w={500}
            />
          </Container>
        </div>
        <Container className='mx-auto mt-8 md:hidden '>
          <MyImage
            source={"/assets/logoV2/digital-card-animate.svg"}
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
          <p className='text-[37px] font-bold leading-[44px] text-darkBlue text-center mb-[40px] mx-10'>
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
export default BusinessCard;
