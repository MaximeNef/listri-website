import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const ClientHeroCard = () => {
  return (
    <Container>
      <Flex
        justify='start'
        className=' snap-x mx-auto snap-mandatory h-[500px] flex w-full overflow-scroll px-[30%] pb-8 pt-3'
      >
        <Container className='snap-center bg-[#FFFAF5] w-[220px] flex-shrink-0 h-[200px] flex items-center justify-center mx-6 shadow-ServiceCard rounded-[20px]'>
          <Image
            src='/assets/logo/pcweb.svg'
            alt='Picture of the author'
            width={200}
            height={200}
            className='absolute'
          />
        </Container>
        <Container className='snap-center bg-[#FFFAF5] w-[220px] flex-shrink-0 h-[200px] flex items-center justify-center mx-6 shadow-ServiceCard rounded-[20px]'>
          <Image
            src='/assets/logo/pcweb.svg'
            alt='Picture of the author'
            width={200}
            height={200}
            className=''
          />
        </Container>
        <Container className='snap-center bg-[#FFFAF5] w-[220px] flex-shrink-0 h-[200px] flex items-center justify-center mx-6 shadow-ServiceCard rounded-[20px]'>
          <Image
            src='/assets/logo/pcweb.svg'
            alt='Picture of the author'
            width={200}
            height={200}
            className=''
          />
        </Container>
        <Container className='snap-center bg-[#FFFAF5] w-[220px] flex-shrink-0 h-[200px] flex items-center justify-center mx-6 shadow-ServiceCard rounded-[20px] '>
          <Image
            src='/assets/logo/pcweb.svg'
            alt='Picture of the author'
            width={200}
            height={200}
            className=''
          />
        </Container>
        <Container className='snap-center  w-[20px] flex-shrink-0 h-[200px] flex items-center justify-center mx-10  '></Container>
      </Flex>
    </Container>
  );
};
export default ClientHeroCard;
