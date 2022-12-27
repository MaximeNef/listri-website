import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

import SliderExpCard from "./SliderExpCard";

const SliderExperience = () => {
  const etapes = [
    {
      img: "/assets/logoV2/ExpSlider1.jpg",
      text: "ÉTAPE 1",
      title: "Prise de contact & brainstorming",
    },

    {
      img: "/assets/logoV2/ExpSlider1.jpg",
      text: "ÉTAPE 1",
      title: "Prise de contact & brainstorming",
    },

    {
      img: "/assets/logoV2/ExpSlider1.jpg",
      text: "ÉTAPE 1",
      title: "Prise de contact & brainstorming",
    },

    {
      img: "/assets/logoV2/ExpSlider1.jpg",
      text: "ÉTAPE 1",
      title: "Prise de contact & brainstorming",
    },

    {
      img: "/assets/logoV2/ExpSlider1.jpg",
      text: "ÉTAPE 1",
      title: "Prise de contact & brainstorming",
    },
  ];

  return (
    <Container className='mr-[-25px] '>
      <Flex className=' container-snap snap-x  w-full   snap-mandatory overflow-scroll'>
        {etapes.map((etape, i) => {
          return <SliderExpCard key={i} etape={etape} />;
        })}
      </Flex>
    </Container>
  );
};
export default SliderExperience;
