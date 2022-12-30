import Head from "next/head";
import Link from "next/link";
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

const OptimisationWeb = () => {
  const petitPlus = [
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure",
    },
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure ",
    },
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure",
    },
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure",
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
        <TitleServiceDetail title='Création de Site Web' />
        <Container className='mx-auto mt-8'>
          <MyImage
            source={"/assets/logoV2/Website-creator.svg"}
            h={300}
            w={300}
          />{" "}
        </Container>
        <Container className=' h-[1px] bg-gradient-to-r from-rougeLight via-orangeLight    to-saumon mb-[27px] mx-[25px]' />
        <BtnPrimaire text='Devis gratuit' href='/' />
        <Container className='mt-[87px]'>
          <PetitPlus petitPlus={petitPlus} />
        </Container>
        <Container className='mt-[140px]'>
          <p className='text-[37px] font-bold leading-[44px] text-darkBlue text-center mb-[40px]'>
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
        <div className='my-[100px]'>
          <CallToAction />
        </div>
        <div className='mx-[25px] '>
          <EncorePlus />
        </div>
        <div className='px-[25px] mt-[60px]'>
          <DetailSerivceRealisation current='Services' />
        </div>
      </main>
    </NavPage>
  );
};
export default OptimisationWeb;
