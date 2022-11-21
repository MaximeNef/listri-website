import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";

const Website = () => {
  return (
    <NavPage current='Services'>
      <Head>
        <title>Création de votre site web & e-commerce sur mesure</title>
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
            title={"Site web"}
            description={
              "Un site web permet également d'affirmer votre présence en ligne, il est indispensable à la mise en lumière de votre entreprise. Ouvre vos canaux a de nouveau clients, accroit votre crédibilité, visibilité et permet de véhiculer l’image de votre entreprise."
            }
          />
          <OneServiceImg src={"/assets/logo/WebsiteCreator.svg"} />
        </Container>

        <OneServiceContent
          Contents={[
            {
              title: "Sur mesure",
              src: "/assets/logo/Smartphone.svg",
              text: "Un site qui vous ressemble et vous appartient ! Un design 100% modulable et en harmonie avec votre charte graphique. Un affichage adapté à toutes les tailles d’écrans , afin d’avoir un rendu optimal sur tous les appareils. Simple et efficace, un site avec tout ce qu’il vous faut la ou il le faut et une gestion optimale. Le tout accompagné d’une optimisation pour  un référencement naturel, votre site est en bonne position. un support continu est disponible en permanence afin d’évoluer avec vous.",
            },
            {
              title: "À la pointe du développement",
              src: "/assets/logo/Developer.svg",
              text: "en proposant un site avec une expérience utilisateur et une ergonomie sans pareil ! cela permets d’augmente la satisfaction de vos clients, et d’informer votre cible tout en mettant en valeur vos produits et services.nous travaillons pour vous avec les meilleures technologie en fonction de vos besoins, afin d’assurer des performances optimales et une sécurité sans faille.",
            },
            {
              title: "Réalisons votre project",
              src: "/assets/logo/Concept.svg",
              text: "du brainstorming à la production** , nous répondons a vos besoins. nous analysons précisément vos objectifs, afin de vous satisfaire et de conquérir le coeur vos clients. Listri est une agence Web spécialisé dans le partage et la communication afin de vous fournir des services irréprochable. notre équipe est passionnée , et expert dans l’univers du web.",
            },
            {
              title: "Site vitrine",
              src: "/assets/logo/sitevitrine.svg",
              text: "un site vitrine permets de transmettre votre univers à travers un design 100%  adaptable. il offre une présence en ligne, rassure et augmente la crédibilité de votre activité. permet d’accrocher l’attention du visiteur via une navigation clair, un design ergonomique et captivant.",
            },
            {
              title: "Site e-commerce",
              src: "/assets/logo/ecommerce.svg",
              text: "un site e-commerce est indispensable pour les entreprise qui désire vendre en ligne. il offre de nombreux avantages, permets d’atteindre une clientelle plus vaste. elle permet également d’offrire plus de visibilité a vos produits et services.  offre la possibilité de suivre les résultat et d’optimiser votre e-commerce, stratégie ,ect. les ventes se font en toute sécurité. il offre aussi un outil de communication indispensable pour rassurer les clients",
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
export default Website;
