import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";

const BusinessCard = () => {
  return (
    <NavPage current='Services'>
      <Head>
        <title>Listri Agence Digitale - création de contenu</title>
        <meta
          name={"description"}
          content='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience.'
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container className='py-20 bg-white px-5'>
        <Container className='md:flex md:flex-row  md:items-center'>
          <OneServiceTitle
            title={"Création de contenu"}
            description={
              "  Le Content Marketing (ou marketing de contenu) est une stratégie long-terme qui consiste en la création et distribution régulière de contenus à forte valeur ajoutée pour votre audiance, prospects et clients."
            }
          />
          <OneServiceImg src={"/assets/logo/serviceMarketing.svg"} />
        </Container>

        <OneServiceContent
          Contents={[
            {
              title: "identité",
              src: "/assets/logo/serviceAvater.svg",
              text: "Création & optimisation de votre identité sur le web et les réseaux sociaux à travers des contenus comme des photos, vidéos, infographies.",
            },
            {
              title: "fidélisation de l'audiance",
              src: "/assets/logo/serviceSkill.svg",
              text: "Ces contenus vous permettent d’éduquer, de divertir, de répondre aux problématiques de votre audience et ainsi de prouver votre expertise.",
            },
            {
              title: "Nouveaux clients",
              src: "/assets/logo/newClientMarketing.svg",
              text: "Le marketing de contenu est un véritable levier de croissance avec à la clé de la visibilité, des nouveaux clients et une meilleure fidélisation de votre audiance !",
            },
          ]}
        />

        <Link href='/contactus' passHref>
          <a>
            <OneServiceBtn btn={"Parlez-nous de votre projet"} />
          </a>
        </Link>
      </Container>
    </NavPage>
  );
};
export default BusinessCard;
