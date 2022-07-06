import Container from "../../components/shared/composers/container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OneServiceTitle from "../../components/services/oneService/oneServiceTitle";
import NavPage from "../../components/all/nav-page";
import Image from "next/image";
import OneServiceContent from "../../components/services/oneService/oneServiceContent";
import OneServiceBtn from "../../components/services/oneService/OneServiceBtn";
import OneServiceImg from "../../components/services/oneService/OneServiceImg";
import Link from "next/link";

const Service = ({}) => {
  const router = useRouter();
  const service = router.query;
  console.log(service.id, "debug");
  var title;
  var description;
  var src;
  var contents;
  var content2;
  var content3;
  var initialOneservice;
  switch (service.id) {
    case "creation-de-contenu":
      return (
        <NavPage current='Nos services'>
          <Container className='py-20 bg-[#FFFAF5] px-5'>
            <Container className='md:flex md:flex-row  md:items-center'>
              <OneServiceTitle
                title={"Création de contenu"}
                description={
                  "Le Content Marketing (ou marketing de contenu) est une stratégie long-terme qui consiste en la création et distribution régulière de contenus à forte valeur ajoutée pour votre audiance, prospects et clients."
                }
              />
              <OneServiceImg src='/assets/logo/serviceMarketing.svg' />
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
                <OneServiceBtn />
              </a>
            </Link>
          </Container>
        </NavPage>
      );

    case "social-media":
      return (
        <NavPage current='Nos services'>
          <Container className='py-20 bg-[#FFFAF5] px-5'>
            <Container className='md:flex md:flex-row  md:items-center'>
              <OneServiceTitle
                title={"Social média"}
                description={
                  " L’importance des réseaux sociaux dans le monde auctuelle n’est plus à démontrer. Les réseaux sont devenu la vitrine des entreprises moderne, il est donc primordial d’avoir une page active. "
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
                <OneServiceBtn />
              </a>
            </Link>
          </Container>
        </NavPage>
      );

    case "website":
      return (
        <NavPage current='Nos services'>
          <Container className='py-20 bg-[#FFFAF5] px-5'>
            <Container className='md:flex md:flex-row  md:items-center'>
              <OneServiceTitle
                title={"Site web"}
                description={
                  "Un site web permet également d'affirmer votre présence en ligne, il est indispensable à la mise en lumière de votre entreprise. Ouvre vos canaux a de nouveau clients, accroit votre crédibilité, visibilité et permet de véhiculer l’image de votre entreprise. "
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
                <OneServiceBtn />
              </a>
            </Link>
          </Container>
        </NavPage>
      );
    case "referencement":
      return (
        <NavPage current='Nos services'>
          <Container className='py-20 bg-[#FFFAF5] px-5'>
            <Container className='md:flex md:flex-row  md:items-center'>
              <OneServiceTitle
                title={"Référencement Web"}
                description={
                  "Il est primordial pour une entreprise de se retrouver sur les moteurs de recherche pour permettre à ses clients de la retrouver facilement. Hélas la concurrence est rude, c’est pour cela que nous vous accompagnons de le référencement de votre site web. SEO, SEA, SMO, SMA "
                }
              />
              <OneServiceImg src={"/assets/logo/seodashboard.svg"} />
            </Container>
            <OneServiceContent
              Contents={[
                {
                  title: "Référencements SEO & SEA",
                  src: "/assets/logo/Advertising.svg",
                  text: "Il y à plusieures façons de référencer son site web sur internet. La première est le SEO (Search Engine Optimisation) il permet d’optimiser les données se trouvant sur votre site pour qu’il réponde exactement aux recherches éffectuées sur les moteurs de recherche par vos clients. Le SEA (Search Engine Advertising) est la façon payante de se référencer, nous optimisons avec vous la stratégie de communication et les mots clefs sur lesquels vous voulez vous référencer pour vous faire apparaitre en première page des recherches Google.",
                },
                {
                  title: "Référencement SMO & SMA",
                  src: "/assets/logo/People.svg",
                  text: "Le SMO (Social Media Optimisation) est l’optimisation de vos réseaux sociaux pour faire en sorte que vos visiteurs soient redirigés vers votre site web. Le SMA (Social Media Advertising) est l’équivalent du SEA sauf que les publicités payantes se font sur les réseaux sociaux pour faire en sorte de rediriger cette audiance vers votre site web.",
                },
                {
                  title: "Optimisation & reporting",
                  src: "/assets/logo/refperformance.svg",
                  text: "Selon la stratégie de référencement dont vous avez besoin, nous définirons vos objectifs ensemble. En fonction de ce qui à été choisi, nous analyserons votre site et la concurrence. Nous optimiserons votre site web pour les moteurs de recherche. Dans le cas de publicité payante, nous mettrons en place des campagnes publicitaires en adéquation avec votre stratgie d’entreprise. Vous recevrez un rapport permetant d’évaluer chacune des campagnes de référencement. Selon les résultats obtenus, nous continuerons d’optimiser vos campagnes pour cibler au mieux vos clients.",
                },
              ]}
            />
            <Link href='/contactus' passHref>
              <a>
                <OneServiceBtn />
              </a>
            </Link>
          </Container>
        </NavPage>
      );

    case "referencement-web":
      initialOneservice = {
        title: "marketing",
        description:
          "Le Content Marketing (ou marketing de contenu) est une stratégie long-terme qui consiste en la création et distribution régulière de contenus à forte valeur ajoutée pour votre audiance, prospects et clients. ",
        src: "/assets/logo/serviceMarketing.svg",
        contents: [
          {
            title: "identité",
            src: "/assets/logo/serviceAvater.svg",
            text: "Création & optimisation de votre identité sur le web et les réseaux sociaux à travers des contenus comme des photos, vidéos, infographies.",
          },
          {
            title: "fidélisation de l'audiance",
            src: "/assets/logo/serviceSkill.svg",
            text: "Création & optimisation de votre identité sur le web et les réseaux sociaux à travers des contenus comme des photos, vidéos, infographies.",
          },
          {
            title: "fidélisation de l'audiance",
            src: "/assets/logo/serviceSkill.svg",
            text: "Création & optimisation de votre identité sur le web et les réseaux sociaux à travers des contenus comme des photos, vidéos, infographies.",
          },
        ],
      };
      break;
    default:
      console.log("Sorry, we are out of " + service + ".");
  }
};
export default Service;
