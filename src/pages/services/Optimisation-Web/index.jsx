import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";

const OptimisationWeb = () => {
  return (
    <NavPage current='Services'>
      <Head>
        <title>Listri Agence Digitale - Optimisation Web</title>
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
            title={"Référencement Web"}
            description={
              "Votre site n’est pas optimsé et cela vous fait perdez tous les jours des clients potentiels sans vous en rendre compte. Mais ne vous en faites pas, grâce a l’intégration de notre outil nous serons en mesure de comprendre vos visiteurs, de savoir qui ils sont et pourquoi ils quittent votre site sans prendre contact ou passer commande. "
            }
          />
          <OneServiceImg src={"/assets/logo/optimisation.svg"} />
        </Container>

        <OneServiceContent
          Contents={[
            {
              title: "Analyse des données",
              src: "/assets/logo/analyse.svg",
              text: "En analysant les données collectées & les points chauds/froids de votre site, nous l’optimiserons pour qu’il réponde aux exigence de vos utilisateurs. Cette optimisation constant vous permet de rester à la pointe de ce qu’il se fait et de pouvoir vous adapter à chaque changement de comportment de vos visiteurs.",
            },
            {
              title: "Optimisation continue",
              src: "/assets/logo/PerformanceOpti.svg",
              text: "Notre objectif est de vous accompagner tout au long de votre croissance digitale pour vous apporter un site qui converti plus pour vous faire gagner plus.",
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
export default OptimisationWeb;