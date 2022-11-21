import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";

const SocialMedia = () => {
  return (
    <NavPage current='Services'>
      <Head>
        <title>Votre agence spécialisée en social media marketing </title>
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
            title={"Social média"}
            description={
              "L’importance des réseaux sociaux dans le monde auctuelle n’est plus à démontrer. Les réseaux sont devenu la vitrine des entreprises moderne, il est donc primordial d’avoir une page active."
            }
          />
          <OneServiceImg src={"/assets/logo/SocialDashboard.svg"} />
        </Container>

        <OneServiceContent
          Contents={[
            {
              title: "Analyse de votre cible",
              src: "/assets/logo/socialman.svg",
              text: "Dans un premier temps, nous analyserons ensemble l’audiance de votre marque et la cible que vous souhaitez atteindre.",
            },
            {
              title: "Stratégie sur mesure",
              src: "/assets/logo/Strategy.svg",
              text: "Suite à l’anaylse de votre audiance et vos objectifs, nous sélectionnerons les réseaux sociaux les plus pertinent pour votre communication. Pour finir, nous établirons une stratégie marketing sur mesure qui représentera au mieux votre marque et adaptée à votre cible.",
            },
            {
              title: "Gestion & optimisation continue",
              src: "/assets/logo/Performance.svg",
              text: "Nous ne nous arêtons pas la, vous recevrez un rapport détaillé qui vous permettra de suivre l’évolution de vos réseaux sociaux. Sur base de ces données, nous continuerons d’optimiser votre communication pour la rendre la plus efficace possible. ",
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
export default SocialMedia;
