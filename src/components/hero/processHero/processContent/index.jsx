import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MyImage from "../../../shared/composers/myimage";

const ProcessContent = () => {
  return (
    <Container>
      <Flex
        justify='start'
        className=' container-snap snap-x mx-auto snap-mandatory h-[500px] flex w-full overflow-scroll px-6 pb-8 pt-3 space-x-4'
      >
        {/* PROCESS CARS  */}
        <Container className='space-y-4'>
          <Container className='snap-center bg-[#FFFAF5] w-[310px] flex-shrink-0 h-[450px] flex items-center justify-between py-5  shadow-ServiceCard rounded-[20px] relative'>
            <Container className=' bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50 absolute right-0 h-16 w-16 top-0 rounded-tr-[20px] rounded-bl-[50px] items-center justify-center text-[21px] font-medium text-[#FFFAF5]'>
              {"1"}
            </Container>
            <Container className=' font-semibold text-[21px] px-7'>
              {"Prise de contact & brainstorming."}
            </Container>
            <Container className='px-7 text-[17px] '>
              {
                "Vous nous partagez vos idées et la façon dont vous imaginez votre projet. Nous vous guidons dans cette phase en apportant notre expertise pour que votre projet soit au goût du jour."
              }
            </Container>
            <MyImage source='/assets/logo/rocketProcess1.svg' w={100} h={100} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/rocketProcess1.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            />{" "} */}
          </Container>{" "}
          <Flex justify='center' align='center' className='space-x-1'>
            <Container className='min-h-[8px] min-w-[16px] rounded-full  bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  '></Container>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full bg-[#FF7E00]/50 '></Container>
          </Flex>
        </Container>{" "}
        {/* PROCESS CARS  */}
        <Container className='space-y-4'>
          <Container className='snap-center bg-[#FFFAF5] w-[310px] flex-shrink-0 h-[450px] flex items-center justify-between py-5  shadow-ServiceCard rounded-[20px] relative'>
            <Container className=' bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  absolute right-0 h-16 w-16 top-0 rounded-tr-[20px] rounded-bl-[50px] items-center justify-center text-[21px] font-medium text-[#FFFAF5]'>
              {"2"}
            </Container>
            <Container className=' font-semibold text-[21px] px-7'>
              {"Réalisation de l’ébauche "}
            </Container>
            <Container className='px-7 text-[17px]'>
              {
                " Réalisation de l’ébauche Suite du premier rendez-vous nous vous réalisons une ébauche de votre projet pour que vous puissiez avoir un premier rendu visuel de vos idées."
              }
            </Container>
            <MyImage source='/assets/logo/rocketProcess2.svg' w={100} h={100} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/rocketProcess2.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            /> */}
          </Container>
          <Flex justify='center' align='center' className='space-x-1'>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>{" "}
            <Container className='min-h-[8px] min-w-[16px] rounded-full  bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  '></Container>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full bg-[#FF7E00]/50 '></Container>
          </Flex>
        </Container>
        {/* PROCESS CARS  */}
        <Container className='space-y-4'>
          <Container className='snap-center bg-[#FFFAF5] w-[310px] flex-shrink-0 h-[450px] flex items-center justify-between py-5  shadow-ServiceCard rounded-[20px] relative'>
            <Container className=' bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  absolute right-0 h-16 w-16 top-0 rounded-tr-[20px] rounded-bl-[50px] items-center justify-center text-[21px] font-medium text-[#FFFAF5]'>
              {"3"}
            </Container>
            <Container className=' font-semibold text-[21px] px-7'>
              {" Modifications & validation"}
            </Container>
            <Container className='px-7 text-[17px]'>
              {
                "Modifications & validation Sur base de l’ébauche nous prenons en compte vos retours et adaptons votre projet pour le préparer à la validation finale. "
              }
            </Container>
            <MyImage source='/assets/logo/rocketProcess3.svg' w={100} h={100} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/rocketProcess3.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            /> */}
          </Container>
          <Flex justify='center' align='center' className='space-x-1'>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>{" "}
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>{" "}
            <Container className='min-h-[8px] min-w-[16px] rounded-full  bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  '></Container>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full bg-[#FF7E00]/50 '></Container>
          </Flex>
        </Container>
        {/* PROCESS CARS  */}
        <Container className='space-y-4'>
          <Container className='snap-center bg-[#FFFAF5] w-[310px] flex-shrink-0 h-[450px] flex items-center justify-between py-5  shadow-ServiceCard rounded-[20px] relative'>
            <Container className=' bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  absolute right-0 h-16 w-16 top-0 rounded-tr-[20px] rounded-bl-[50px] items-center justify-center text-[21px] font-medium text-[#FFFAF5]'>
              {"4"}
            </Container>
            <Container className=' font-semibold text-[21px] px-7'>
              {"Développement de votre projet"}
            </Container>
            <Container className='px-7 text-center'>
              {"Votre projet entre en phase de développement."}
            </Container>
            <Container className='mb-6 font-medium'>
              {" Mise en ligne de votre projet !"}
            </Container>
            <MyImage source='/assets/logo/rocketProcess4.svg' w={100} h={100} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/rocketProcess4.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            /> */}
          </Container>
          <Flex justify='center' align='center' className='space-x-1'>
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>{" "}
            <Container className=' min-h-[8px] min-w-[8px] rounded-full  bg-[#FF7E00]/50  '></Container>{" "}
            <Container className=' min-h-[8px] min-w-[8px] rounded-full bg-[#FF7E00]/50 '></Container>
            <Container className='min-h-[8px] min-w-[16px] rounded-full  bg-gradient-to-b from-[#FF7E00] to-[#FF7E00]/50  '></Container>
          </Flex>
        </Container>
        <Container className='snap-center  w-[20px] flex-shrink-0 h-[200px] flex items-center justify-center mx-10  '></Container>
      </Flex>
    </Container>
  );
};
export default ProcessContent;