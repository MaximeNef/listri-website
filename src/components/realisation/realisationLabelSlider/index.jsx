import { useEffect } from 'react';
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import RealisationLabelCard from "./realisationLabelCard";

const RealisationLabelSlider = ({
  setFilterRealisation,
  filterRealisation,
}) => {
  const realisations = [
    {
      source: "",
      text: "Site-web",
      filtre: "dev",
      selected : false,
    },
    {
      source: "/assets/logoV2/brand.svg",
      text: "Marketing",
      filtre: "marketing",
      selected : false,
    },
    {
      source: "",
      text: "référencement",
      filtre: "référencement",
      selected : false,

    },
    {
      source: "/assets/logoV2/opti.svg",
      text: "Optimisation",
      filtre: "Optimisation",
      selected : false,
    },

  ];
  
  useEffect(() => {
    if (typeof setFilterRealisation !== "function") {
      console.error("setFilterRealisation is not a function");
    }
  }, [setFilterRealisation]);

  const handleRealisationClick = (filtre) => {
    setFilterRealisation(prevState => {
      if (prevState === filtre) {
        return "all";
      } else {
        return filtre;
      }
    });
  };

  return (
    <Container>
      <Flex className='snap-mandatory snap-x overflow-scroll md:overflow-hidden mx-[-25px] pl-2 '>
        <Container className={"min-w-[25px] "} />
        {realisations.map((realisation, i) => {
          return (
            <a key={i} onClick={() => handleRealisationClick(realisation.filtre)}>
              <RealisationLabelCard
                selected={realisation.filtre === filterRealisation}
                filtre={realisation.filtre}
                filterRealisation={filterRealisation}
                source={realisation.source}
                text={realisation.text}
              />
            </a>
          );
        })}
        <Container className={"min-w-[20px]"} />
      </Flex>
    </Container>
  );
};

export default RealisationLabelSlider;