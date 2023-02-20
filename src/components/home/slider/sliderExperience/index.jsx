import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

import SliderExpCard from "./SliderExpCard";
import SliderLotties from "./SliderLotties";

const SliderExperience = () => {
  const etapes = [
    {
      img: "/assets/logoV2/ExpSlider1.jpg",
      text: "ÉTAPE 1",
      title: "Prise de contact & brainstorming",
      description:
        "Vous nous partagez vos idées et la façon dont vous imaginez votre projet. Nous vous guidons dans cette phase en apportant notre expertise pour que votre projet soit au goût du jour.",
    },

    {
      img: "/assets/logoV2/ExpSlider2.jpg",
      text: "ÉTAPE 2",
      title: "Réalisation de l'ébauche",
      description:
        "A la suite du premier rendez-vous nous vous réalisons une ébauche de votre projet pour que vous puissiez avoir un rendu visuel de vos idées.",
    },
    {
      img: "/assets/logoV2/ExpSlider3.jpg",
      text: "ÉTAPE 3",
      title: "Modification & validation",
      description:
        "Sur base du rendu visuel, nous prenons en compte vos retours et adaptons votre projet pour le préparer à la validation finale.",
    },

    {
      img: "/assets/logoV2/ExpSlider4.jpg",
      text: "ÉTAPE 4",
      title: "Développement de votre projet",
      description:
        "Vous voila à l'étape finale , celle-ci consiste au développement et au testing de votre project.",
    },
  ];

  return (
    <Container className='mr-[-25px] ml-[-25px]'>
      <Flex className=' container-snap snap-x  w-full   snap-mandatory overflow-scroll '>
        <Container className='min-w-[25px] ' />
        {etapes.map((etape, i) => {
          return <SliderExpCard key={i} etape={etape} />;
        })}
        <SliderLotties />
        <Container className='min-w-[2px] ' />
      </Flex>
    </Container>
  );
};
export default SliderExperience;
