import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const ClientHeroDesktop = () => {
  return (
    <Container className='relative mb-40'>
      <Container className='absolute mt-16 left-[10%]'>
        <Image
          src='/assets/logo/heroRealisationImg.svg'
          alt='Picture of the author'
          width={350}
          height={350}
          className=''
        />{" "}
      </Container>

      <Flex
        type='col'
        align='center'
        className=' space-y-4 mb-8 m-10 z-20  ml-64'
      >
        <h2 className=' font-medium text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {"Nos réalisations "}
        </h2>
        <Container className='font-semibold text-[#37474F]'>
          {" "}
          Nous réalisons vos projets ensemble{" "}
        </Container>
        <Container className='text-center font-light text-[#37474F] max-w-[600px]'>
          Nous réalisons vos projets ensemble partout ou nous alons. Nous
          réalisons vos projets ensemble partout ou nous alons. Nous réalisons
        </Container>{" "}
      </Flex>
    </Container>
  );
};
export default ClientHeroDesktop;
