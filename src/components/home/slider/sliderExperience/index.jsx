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
        "Vous nous partagez vos idées et la façon dont vous imaginez votre projet. Nous vous guidons dans cette phase en apportant notre expertise pour que votre projet soit au goût du jour.",
    },
    {
      img: "/assets/logoV2/ExpSlider3.jpg",
      text: "ÉTAPE 3",
      title: "Modification & validation",
      description:
        "Vous nous partagez vos idées et la façon dont vous imaginez votre projet. Nous vous guidons dans cette phase en apportant notre expertise pour que votre projet soit au goût du jour.",
    },

    {
      img: "/assets/logoV2/ExpSlider4.jpg",
      text: "ÉTAPE 4",
      title: "Développement de votre projet",
      description:
        "Vous nous partagez vos idées et la façon dont vous imaginez votre projet. Nous vous guidons dans cette phase en apportant notre expertise pour que votre projet soit au goût du jour.",
    },
  ];

  return (
    <Container className='mr-[-25px] ml-[-25px]'>
      <Flex className=' container-snap snap-x  w-full   snap-mandatory overflow-scroll'>
        <Container className='min-w-[25px]' />
        {etapes.map((etape, i) => {
          return <SliderExpCard key={i} etape={etape} />;
        })}
        <SliderLotties />
        <Container className='min-w-[2px]' />
      </Flex>
    </Container>
  );
};
export default SliderExperience;
