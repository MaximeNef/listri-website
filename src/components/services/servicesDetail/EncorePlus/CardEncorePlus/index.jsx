import React from "react";
import Container from "../../../../shared/composers/container";
import Flex from "../../../../shared/composers/flex";
import MyImage from "../../../../shared/composers/myimage";

const CardEncorePlus = ({ encore, i }) => {
  // \catégorie, image, ligne1, ligne2
  return (
    <Container
      className={` md:w-[30%] md:mx-[10px]  rounded-[15px] p-[25px] mb-[20px]${
        i % 2 == 0 ? " bg-darkBlue" : " bg-lightGrey"
      }`}
    >
      <Flex className='justify-between items-center'>
        <Container
          className={`text-[14px] font-bold  ${
            i % 2 == 0 ? "text-lightGrey" : " text-darkBlue "
          }`}
        >
          {encore.categorie}
        </Container>
        <Container className='relative h-[50px] w-[50px]'>
          {" "}
          <MyImage
            source={encore.image}
            layout={"fill"}
            objectFit={"contain"}
            className={""}
          />
        </Container>
      </Flex>
      <Container>
        <p className=' mt-[14px] text-[20px] font-bold leading-[23px] text-transparent  bg-clip-text w-fit  bg-gradient-to-r via-orangeLight from-rougeLight to-saumon'>
          {encore.ligne1}
        </p>
        <p className='mt-[10px] text-[20px] font-bold leading-[23px] text-transparent  bg-clip-text w-fit  bg-gradient-to-r via-orangeLight from-rougeLight to-saumon mb-[35px]'>
          {encore.ligne2}
        </p>
      </Container>
    </Container>
  );
};

export default CardEncorePlus;
