import Image from "next/image";
import Container from "../../shared/composers/container";

const ServiceCard = ({ serviceName, service }) => {
  return (
    <Container className='bg-[#FFFAF5]  shadow-ServiceCard  hover:ease-in hover:duration-300 hover:bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] p-[2px] hover:scale-105'>
      <Container className='  rounded-[18px] w-full py-16 bg-[#FFFAF5] relative font-normal text-2xl text-[#37474F] '>
        <Container className='absolute top-0 w-[110px] h-[110px] left-1'>
          <Image
            src='/assets/logo/speakerMarketing.svg'
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </Container>
        {serviceName}
      </Container>
    </Container>
  );
};
export default ServiceCard;
