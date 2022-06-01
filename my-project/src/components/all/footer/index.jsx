import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import Image from "next/image";

const Footer = () => {
  return (
    <Container className='bg-[#FEA249] text-white m-auto w-full text-center pb-5 '>
      {/* btn contact us  */}
      <Flex justify='center' className='  mt-[-25px] mb-10 '>
        <Flex
          justify='center'
          className='rounded-[25px]  bg-gradient-to-r from-[#fbbe8d] to-[#f9d1af]  py-[10px]  text-white   max-w-[180px] border-4  border-white'
        >
          <Image
            src='/assets/logo/email.svg'
            alt='Picture of the author'
            width={22}
            height={25}
            className=''
          />
          <Container className='ml-2 font-bold'> Contact us</Container>
        </Flex>
      </Flex>
      {/* reséaux sociaux  */}
      <Container> Follow Us </Container>
      <Flex justify='center' className='px-7 pb-2 space-x-5'>
        <Container>
          <Image
            src='/assets/logo/Facebook.svg'
            alt='Picture of the author'
            width={30}
            height={30}
            className=''
          />
        </Container>
        <Container>
          {" "}
          <Image
            src='/assets/logo/Instagram.svg'
            alt='Picture of the author'
            width={30}
            height={30}
            className=''
          />
        </Container>
        <Container>
          <Image
            src='/assets/logo/Linkedin.svg'
            alt='Picture of the author'
            width={30}
            height={30}
            className=''
          />
        </Container>
      </Flex>
      {/* text footer */}
      2022 © listri | Designed with passion by LISTRI
    </Container>
  );
};
export default Footer;
