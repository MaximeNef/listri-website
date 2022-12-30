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
  return (
    <NavPage current='Services'>
      <Head>
        <title>Création de votre site web & e-commerce sur mesure</title>
        <meta
          name={"description"}
          content='Notre agence spécialisée dans la création de site web (vitrine ou E-commerce) pour un visibilité en ligne optimale grâce à une solution 100% sur mesure.'
        />
        <meta
          name='keywords'
          content='site web, site internet, conception de site web, design de site web, développement de site web, création de site web, gestion de site web, optimisation de site web, conception de site web, responsive design, référencement de site web, listri digital'
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
          <PetitPlus />
        </Container>
        <Container className='mt-[140px]'>
          <p className='text-[37px] font-bold leading-[44px] text-darkBlue text-center mb-[40px]'>
            un petit +
          </p>
          <ServiceDetailCard
            blueBg={true}
            title={"Responsive"}
            subTitle={"A la pointe du développement"}
            description1={
              "Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique."
            }
            description2={
              "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal"
            }
            description3={
              "Simple & efficace, un site avec tout ce qu'il vous faut !"
            }
            description4={
              "Accompagné d'une optimisation pour un référencement naturel"
            }
            src={"/assets/logoV2/website-creator.svg"}
          />
          <ServiceDetailCard
            blueBg={false}
            title={"Responsive"}
            subTitle={"A la pointe du développement"}
            description1={
              "Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique."
            }
            description2={
              "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal"
            }
            description3={
              "Simple & efficace, un site avec tout ce qu'il vous faut !"
            }
            description4={
              "Accompagné d'une optimisation pour un référencement naturel"
            }
            src={"/assets/logoV2/website-creator.svg"}
          />
          <ServiceDetailCard
            blueBg={true}
            title={"ghfh"}
            subTitle={"A la pointe du développement"}
            description1={
              "Un site qui vous ressemble & vous appartient ! un design 100% modulable & en harmonie avec votre charte graphique."
            }
            description2={
              "Un affichage adapté à toutes les tailles d'écrans, afin d'avoir un rendu optimal"
            }
            description3={
              "Simple & efficace, un site avec tout ce qu'il vous faut !"
            }
            description4={
              "Accompagné d'une optimisation pour un référencement naturel"
            }
            src={"/assets/logoV2/website-creator.svg"}
          />
        </Container>
        <div className='my-[40px]'>
          <CallToAction />
        </div>
        <div className='mx-[25px] mt-[100px]'>
          <EncorePlus />
        </div>
        <div className='px-[25px] mt-[60px]'>
          <DetailSerivceRealisation current='Services' />
        </div>
      </main>
    </NavPage>
  );
};
export default Website;
