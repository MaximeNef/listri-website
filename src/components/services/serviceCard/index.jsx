import Image from "next/image";
import Container from "../../shared/composers/container";
import MyImage from "../../shared/composers/myimage";

const ServiceCard = ({ serviceName, src }) => {
  return (
    <Container className='bg-[#FFFAF5]  shadow-ServiceCard  hover:ease-in hover:duration-300 hover:bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] p-[2px] hover:scale-105'>
      <Container className=' absolute z-10 ml-[-2px] mt-[-2px]'>
        {" "}
        <MyImage source='/assets/logo/tacheCard2.png' w={500} h={235} />
        {/* <Image
          src='/assets/logo/tacheCard2.png'
          alt='Picture of the author'
          width={500}
          height={235}
          className='  h-full w-full rounded-tl-[19px] rounded-b-[19px]'
        /> */}
      </Container>
      <Container className='  rounded-[18px] w-full py-16 bg-[#FFFAF5] relative font-normal text-2xl text-[#37474F] '>
        <Container className='absolute top-4  left-4'>
          <MyImage source={src} w={45} h={45} />
          {/* <Image src={src} alt='Picture of the author' width={45} height={45} /> */}
        </Container>
        <Container className='lg:mt-12 font-semibold text-[21px]  items-start w-fit mx-auto  '>
          <p className='z-10'> {serviceName}</p>
          <Container className='h-2 w-full mt-[-12px] rounded-full bg-gradient-to-r from-[#FF7E00]/50 to-[#FF7E00]/30' />
        </Container>
      </Container>
    </Container>
  );
};
export default ServiceCard;
