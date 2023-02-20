import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import SliderIdentityCard from "./sliderIdentityCard";

const SliderIdentity = () => {
  const raisons = [
    {
      logo: "assets/logoV2/rate.svg",
      color: "text-[#6CCA4E]",
      blackText1: "Profitez",
      colorText2: "d’une expertise et d’un soutien",
      blackText3: "supplémentaire",
    },
    {
      logo: "assets/logoV2/lightBulb.svg",
      color: "text-rougeLight",
      blackText1: "Nous vous apportons des",
      colorText2: "solutions à la pointe adaptées à votre entreprise",
      blackText3: "",
    },
    {
      logo: "assets/logoV2/screen.svg",
      color: "text-[#AC39FF]",
      blackText1: "",
      colorText2: "Augmentation des conversions",
      blackText3: "de votre site web",
    },
    {
      logo: "assets/logoV2/content.svg",
      color: "text-orangeLight",
      blackText1: "Une stratégie de contenu",
      colorText2: "riche et cohérente",
      blackText3: "",
    },
    {
      logo: "assets/logoV2/mondial.svg",
      color:
        "text-transparent bg-clip-text bg-gradient-to-r from-orangeLight to-saumon",
      blackText1: "Une plus",
      colorText2: "grande portée et une présence mondiale",
      blackText3: "",
    },
  ];

  return (
    <Flex className='snap-mandatory snap-x overflow-scroll mx-[-25px] pl-2 '>
      <Container className={"min-w-[25px]"} />
      {raisons.map((raison, i) => {
        return (
          <SliderIdentityCard
            key={i}
            logo={raison.logo}
            color={raison.color}
            blackText1={raison.blackText1}
            colorText2={raison.colorText2}
            blackText3={raison.blackText3}
          />
        );
      })}
      <Container className={"min-w-[20px]"} />
    </Flex>
  );
};

export default SliderIdentity;
