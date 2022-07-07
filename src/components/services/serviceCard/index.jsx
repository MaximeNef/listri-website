import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const ServiceCard = ({ serviceName, src }) => {
  return (
    <Container className='bg-[#FFFFFF]  shadow-ServiceCard  hover:ease-in hover:duration-300 hover:bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] p-[2px]  hover:scale-105  md:h-[310px] md:w-[247px]  lg:rounded-tl-[10px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-br-[10px] md:pl-0 md:pt-0  md:pb-0 md:pr-[4px]'>
      <Container className=' absolute z-10 ml-[-2px] mt-[-2px] md:hidden'>
        {" "}
        <MyImage
          source='/assets/logo/tacheCard2.png'
          w={500}
          h={235}
          className={"rounded-[20px]"}
        />
      </Container>
      <Flex
        align='center'
        className='  rounded-[18px] w-full py-16 bg-[#FFFFFF] relative font-normal text-2xl text-[#37474F]  lg:rounded-tl-[9px] lg:rounded-tr-[99px] lg:rounded-bl-[99px] lg:rounded-br-[9px] md:min-h-[300px] '
      >
        <Container className='absolute top-4  left-4'>
          <MyImage source={src} w={45} h={45} />
        </Container>
        <Container className='lg:mt-12 font-semibold text-[21px]  items-start w-fit mx-auto  '>
          <p className='z-10  '> {serviceName}</p>
          <Container className='h-2 w-full mt-[-12px] rounded-full bg-gradient-to-r from-[#FF7E00]/50 to-[#FF7E00]/30' />
        </Container>
      </Flex>
    </Container>
  );
};
export default ServiceCard;
