import Link from "next/link";
import React from "react";
import RealisationLoop from "../../../home/HomeRealisation/RealisationLoop";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import SubtitleV2 from "../../../shared/composers/ListriV2/subtitleV2";
import MyImage from "../../../shared/composers/myimage";

const DetailSerivceRealisation = ({ current }) => {
  return (
    <Container>
      <SubtitleV2
        subtitle1={"Nos réalisations."}
        subtitle2={"Innovantes & uniques tout comme vous."}
        TextWhite={""}
      />{" "}
      <div className='mt-[10px]'>
        <RealisationLoop current='Services' />
      </div>
      <div className='w-full h-[1px] bg-gradient-to-r from-rougeLight via-orangeLight    to-saumon mb-[20px] ml-[-10px]' />
      <Flex>
        <Flex
          type='col'
          className='font-bold text-[21px] leading-[25px] tracking-[0.23px] text-right'
        >
          <p>Découvrez toutes </p>
          <p>nos réalisations</p>
        </Flex>{" "}
        <Link href='/realisations'>
          <Container className='ml-[16px] bg-gradient-to-bl via-[#FEA249] from-[#FF7E00] to-[#F9CCA6] h-fit p-[14px] rounded-full '>
            <MyImage
              source={"/assets/logoV2/arrowRight.svg"}
              h={"21px"}
              w={"21px"}
              className={" "}
            />
          </Container>
        </Link>
      </Flex>
    </Container>
  );
};

export default DetailSerivceRealisation;
