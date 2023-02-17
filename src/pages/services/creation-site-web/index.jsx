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

const Siteweb = () => {
  const infoCards = [
    {
      blueBg: true,
      title: "Responsive",
      subTitle: "un affichage optimal pour tous les écrans",
      description1:
        "Le responsive design est  essentiel pour assurer que votre site web s'affiche correctement sur tous les appareils, qu'il s'agisse d'un ordinateur, d'une tablette ou d'un téléphone mobile.",

      description2:
        "En optant pour un design responsive, vous garantissez une expérience utilisateur optimale pour tous vos visiteurs, quel que soit leur appareil.",

      description3:
        "De plus, le responsive design est devenu un critère important pour le référencement dans les moteurs de recherche, il est donc essentiel de l'intégrer à votre site si vous souhaitez être bien classé dans les résultats de recherche.",

      src: "/assets/logoV2/responsive.svg",
    },
    {
      blueBg: false,
      title: "Optimiser",
      subTitle: "des performance inégalable",
      description1:
        "L'optimisation d'un site web est essentielle pour garantir que votre site est performant et facile à utiliser pour vos visiteurs.",

      description2:
        "Il y a plusieurs aspects à prendre en compte lors de l'optimisation, tels que la vitesse de chargement, la convivialité pour les utilisateurs et la qualité du contenu.",

      description3:
        "Les technologies les plus récente vous aider à améliorer l'expérience utilisateur et à rendre votre site plus attractif.",

      description4:
        "Le référencement est un aspect crucial de l'optimisation d'un site web. Vous pouvez vous assurer qu'il apparaît dans les résultats de recherche pour les mots-clés pertinents et atteindre ainsi de nouveaux clients potentiels.",

      src: "/assets/logoV2/optimiser-animate.svg",
    },
    {
      blueBg: true,
      title: "Visibilité",
      subTitle: "soyez visible n’importe ou",
      description1:
        "Un site web renforce la confiance de vos clients en votre entreprise en présentant votre entreprise et ses produits ou services de manière claire et concise. ",

      description2:
        "Plus votre site est visible, plus vous aurez de visiteurs sur votre site, ce qui peut potentiellement augmenter les ventes et les conversions.",

      description3:
        "En résumé, la visibilité de votre site web est essentielle pour développer votre entreprise et atteindre de nouveaux clients. En investissant dans la visibilité de votre site, vous investissez dans la visibilité de votre entreprise.",

      src: "/assets/logoV2/visibility-animate.svg",
    },
  ];

  const cardPlus = [
    {
      categorie: "Sur mesure",
      image: "/assets/logoV2/sur-mesur-white.svg",
      ligne1: "Un site 100%",
      ligne2: "a votre image.",
    },
    {
      categorie: "Performant",
      image: "/assets/logoV2/performent.svg",
      ligne1: "Un site à la pointe",
      ligne2: "de la technologie.",
    },
    {
      categorie: "Référencement",
      image: "/assets/logoV2/referencement-améliorer-white.svg",
      ligne1: "Un site optimisé pour",
      ligne2: "le référencement.",
    },
    {
      categorie: "Le site vous appartient à 100%",
      image: "/assets/logoV2/vous-appartient.svg",
      ligne1: "Vous êtes propriétaire",
      ligne2: "de votre site.",
    },
    {
      categorie: "Sur mesure",
      image: "/assets/logoV2/sur-mesur-white.svg",
      ligne1: "Un site qui répond",
      ligne2: "à vos besoins.",
    },
  ];
  const info = [
    {
      img: "/assets/logoV2/sur-mesur.svg",
      text: "Sur mesure",
    },
    {
      img: "/assets/logoV2/vous-appartient.svg",
      text: "Le site vous appartient à 100%",
    },
    {
      img: "/assets/logoV2/referencement-améliorer.svg",
      text: "Référencement amélioré",
    },
    {
      img: "/assets/logoV2/performent.svg",
      text: "Performent",
    },
  ];
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
        <div className='flex justify-center items-center'>
          <TitleServiceDetail title='Création de' title2={"Site Web"} />
          <Container className='mx-auto mt-8 hidden md:inline-flex md:w-1/3 '>
            <MyImage
              source={"/assets/logoV2/Website-creator.svg"}
              h={500}
              w={500}
            />
          </Container>
        </div>

        <Container className='mx-auto mt-8 md:hidden '>
          <MyImage
            source={"/assets/logoV2/website-creator.svg"}
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
          <div className='text-[37px] md:text-[75px] md:leading-[80px]   font-bold leading-[44px] text-darkBlue text-center mb-[40px] mx-10 '>
            <p> Recevez</p>
            <p>une expérience,</p>
            <p>complète</p>
          </div>
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
export default Siteweb;
