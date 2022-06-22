import Container from "../../components/shared/composers/container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OneServiceTitle from "../../components/services/oneService/oneServiceTitle";
import NavPage from "../../components/all/nav-page";
import Image from "next/image";
import OneServiceContent from "../../components/services/oneService/oneServiceContent";
import OneServiceBtn from "../../components/services/oneService/OneServiceBtn";

const Service = ({}) => {
  const router = useRouter();
  const service = router.query;
  var title;
  var description;
  var src;
  var contents;
  var content2;
  var content3;
  var initialOneservice;

  switch (service.id) {
    case "creation-de-contenu":
      initialOneservice = {
        title: "Création de contenu",
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
            title: "Nouveaux clients",
            src: "/assets/logo/newClientMarketing.svg",
            text: "Le marketing de contenu est un véritable levier de croissance avec à la clé de la visibilité, des nouveaux clients et une meilleure fidélisation de votre audiance !",
          },
        ],
      };
      break;
    case "social-media":
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
    case "website":
      initialOneservice = {
        title: "Web site",
        description:
          " un site web permet également d'affirmer votre présence en ligne, il est indispensable à la mise en lumiere de votre entreprise.",
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
    case "web design":
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
  const [Oneservice, setOneservice] = useState(initialOneservice);
  return (
    <NavPage current='Nos services'>
      <Container className='py-20 bg-[#FFFAF5] px-5'>
        <OneServiceTitle
          title={Oneservice.title}
          description={Oneservice.description}
        />
        <Image
          src={Oneservice.src}
          alt='Picture of the author'
          width={400}
          height={450}
          className=''
        />
        <OneServiceContent contents={Oneservice.contents} />
        <OneServiceBtn />
      </Container>
    </NavPage>
  );
};
export default Service;
