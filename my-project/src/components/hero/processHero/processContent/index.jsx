import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useEffect, useState } from "react";

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
              {" Première étape de votre projet"}
            </Container>
            <Container className='px-7 text-[17px]'>
              {
                "Briefing avec vous pour comprendre tous vos besoins dans les moindre détails. Cette étape est la plus importante car elle nous permet de s’imprégner de l’identité de votre entreprise."
              }
            </Container>
            <Image
              src='/assets/logo/rocketProcess1.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            />{" "}
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
              {" Deuxieme étape de votre projet"}
            </Container>
            <Container className='px-7 text-[17px]'>
              {
                "Nous réalisons vos projets ensemble partout ou nous alons.Nous réalisons vos projets ensemble partout ou nous alons.Nous réalisons vos projets ensemble partout ou nous alons"
              }
            </Container>
            <Image
              src='/assets/logo/rocketProcess2.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            />
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
              {" Troisième étape de votre projet"}
            </Container>
            <Container className='px-7 text-[17px]'>
              {
                "Nous réalisons vos projets ensemble partout ou nous alons.Nous réalisons vos projets ensemble partout ou nous alons.Nous réalisons vos projets ensemble partout ou nous alons."
              }
            </Container>
            <Image
              src='/assets/logo/rocketProcess3.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            />
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
              {" Quatrième étape de votre projet"}
            </Container>
            <Container className='px-7'>
              {
                "Briefing avec vous pour comprendre tous vos besoins dans les moindre détails. Cette étape est la plus importante car elle nous permet de s’imprégner de l’identité de votre entreprise."
              }
            </Container>
            <Image
              src='/assets/logo/rocketProcess4.svg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='absolute'
            />
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
