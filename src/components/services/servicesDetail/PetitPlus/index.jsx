import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import MyImage from "../../../shared/composers/myimage";

const PetitPlus = ({ info }) => {
  const petitPlus = [
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure",
    },
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure ",
    },
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure",
    },
    {
      img: "/assets/logoV2/referencement.svg",
      text: "Sur mesure",
    },
  ];
  return (
    <Container>
      <p className='text-[37px] md:text-[75px] font-bold leading-[44px] text-darkBlue text-center'>
        Nos petit +
      </p>
      <Flex className='flex-wrap mt-[54px] md:flex-nowrap '>
        {info.map((plus, i) => {
          return (
            <Container
              key={i}
              className='flex flex-col items-center w-1/2 mb-[46px] '
            >
              <Container className='relative h-[60px] w-[60px] transform transition duration-500 md:hover:scale-150'>
                <MyImage
                  source={plus.img}
                  layout={"fill"}
                  objectFit={"contain"}
                  className={""}
                />
              </Container>
              <p className='text-[17px] tracking-[-0.37px] leading-[25px] text-darkBlue text-center mx-10'>
                {plus.text}
              </p>
            </Container>
          );
        })}
      </Flex>
    </Container>
  );
};
export default PetitPlus;
