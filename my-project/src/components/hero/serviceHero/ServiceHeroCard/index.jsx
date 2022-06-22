import Container from "../../../shared/composers/container";
import Image from "next/image";

const ServiceHeroCard = ({ serviceName, ServiceDescription }) => {
  return (
    <Container className='bg-[#FFFAF5]  shadow-ServiceCard hover: hover:bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] p-[2px] hover:ease-in hover:duration-300 hover:scale-105 lg:rounded-tl-[10px] lg:rounded-tr-[50px] lg:rounded-bl-[50px] lg:rounded-br-[10px]  lg:h-[310px] lg:w-[252px]'>
      <Container className='  rounded-[18px] w-full py-16 bg-[#FFFAF5] relative font-normal text-2xl text-[#37474F]  lg:rounded-tl-[10px] lg:rounded-tr-[50px] lg:rounded-bl-[50px] lg:rounded-br-[10px] lg:h-[310px] lg:w-[247px] '>
        <Container className='absolute top-0 w-[110px] h-[110px] left-1'>
          <Image
            src='/assets/logo/speakerMarketing.svg'
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </Container>
        <Container className='lg:mt-12 lg:font-semibold'>
          {serviceName}
        </Container>

        <Container className='hidden lg:inline-flex text-sm lg:mt-6 lg:px-6 font-light'>
          {ServiceDescription}
        </Container>
      </Container>
    </Container>
  );
};
export default ServiceHeroCard;
