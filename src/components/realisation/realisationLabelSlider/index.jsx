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
    },
    {
      source: "/assets/logoV2/brand.svg",
      text: "Marketing",
      filtre: "marketing",
    },
    {
      source: "",
      text: "référencement",
      filtre: "référencement",
    },
    {
      source: "/assets/logoV2/opti.svg",
      text: "Optimisation",
      filtre: "Optimisation",
    },
    {
      source: "/assets/logoV2/digitalCard.svg",
      text: "Digital Card",
      filtre: "Digital Card",
    },
  ];

  return (
    <Container>
      <Flex className='snap-mandatory snap-x overflow-scroll mx-[-25px] pl-2'>
        <Container className={"min-w-[25px] "} />
        {realisations.map((realisation, i) => {
          return (
            <a key={i} onClick={() => setFilterRealisation(realisation.filtre)}>
              <RealisationLabelCard
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
