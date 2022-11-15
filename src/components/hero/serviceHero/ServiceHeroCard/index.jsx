import Container from "../../../shared/composers/container";
import Image from "next/image";
import Flex from "../../../shared/composers/flex";
import MyImage from "../../../shared/composers/myimage";

const ServiceHeroCard = ({ serviceName, ServiceDescription, src }) => {
  return (
    <Container className='relative '>
      <Container className='bg-[#FFFFFF] p-[2px] md:p-0  shadow-ServiceCard  hover:bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px]  hover:ease-in hover:duration-300 hover:scale-105 lg:rounded-tl-[10px] lg:rounded-tr-[50px] lg:rounded-bl-[50px] lg:rounded-br-[10px]  lg:h-[310px] lg:w-[252px] '>
        <Container className='  rounded-[18px] w-full py-16 bg-[#FFFFFF] relative  text-2xl text-[#37474F]  lg:rounded-tl-[10px] lg:rounded-tr-[50px] lg:rounded-bl-[50px] lg:rounded-br-[10px] lg:h-[310px] lg:w-[247px] '>
          <Flex justify='between' align='center' className='px-2'>
            {" "}
            <Container className='absolute top-4 left-4 '>
              <MyImage source={src} w={45} h={45} />
            </Container>
            <Container className='lg:mt-12 font-semibold text-[21px]  items-start w-fit mx-auto  '>
              <h3 className='z-10'> {serviceName}</h3>
              <Container className='h-2 w-full mt-[-12px] rounded-full bg-gradient-to-r from-[#FF7E00]/50 to-[#FF7E00]/30' />
            </Container>
          </Flex>
          <Container className='hidden lg:inline-flex text-sm lg:mt-6 lg:px-6 font-light  '>
            {ServiceDescription}
          </Container>
        </Container>
        <Container className=' absolute  md:hidden rounded-lg'>
          <MyImage
            source={"/assets/logo/tacheCard2.png"}
            w={350}
            h={160}
            className='rounded-[19px]'
          />
        </Container>
      </Container>{" "}
    </Container>
  );
};
export default ServiceHeroCard;
