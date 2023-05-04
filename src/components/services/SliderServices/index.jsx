import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import SliderServicesCard from "./SliderServicesCard";

const SliderServices = () => {
  const services = [
    {
      source: "/assets/logoV2/siteWeb.svg",
      text: "Création de site web",
      href: "/services/creation-site-web",
    },

    {
      source: "/assets/logoV2/referencement.svg",
      text: "référencement web",
      href: "/services/referencement",
    },
    {
      source: "/assets/logoV2/marketingDigitalIcones.svg",
      text: "Marketing digital",
      href: "/services/marketing-digital",
    },
    {
      source: "/assets/logoV2/opti.svg",
      text: "Optimisation web",
      href: "/services/optimisation-digital",
    },

  ];
  return (
    <Container>
      <Flex className='snap-mandatory snap-x overflow-scroll md:overflow-hidden  mx-[-25px] pl-2'>
        <Container className={"min-w-[25px] "} />
        {services.map((service, i) => {
          return (
            <a key={i} href={service.href}>
              <SliderServicesCard source={service.source} text={service.text} />
            </a>
          );
        })}
        <Container className={"min-w-[20px]"} />
      </Flex>
    </Container>
  );
};
export default SliderServices;
