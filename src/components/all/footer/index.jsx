import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import Image from "next/image";
import Link from "next/link";
import MyImage from "../../shared/composers/myimage";

const Footer = () => {
  return (
    <Container>
      <Container className=' pt-10 bg-[#FFFAF5]' />
      <Container className='bg-[#FFFAF5]  m-auto w-full text-center pb-5 rounded-tl-[25px] rounded-tr-[25px] border-t-[3px] border-[#F9CCA6]'>
        {/* btn contact us  */}
        <Flex justify='center' className='  mt-[-28px] mb-5'>
          <Link href='/contactus' passHref>
            <a className=''>
              <Container className='border-[#FFFAF5] border-2 rounded-[27px] '>
                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[1px] rounded-[25px] shadow-realisationCard'>
                  <Flex
                    justify='center'
                    className='rounded-[25px]  bg-[#FFFAF5] py-[10px] px-4 t   max-w-[180px]  justify-center items-center'
                  >
                    <Container className=' font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-[17px]'>
                      {"Contactez-nous "}
                    </Container>
                  </Flex>
                </Container>
              </Container>
            </a>
          </Link>
        </Flex>
        {/* reséaux sociaux  */}
        <Flex justify='center' className='px-7 pb-5 space-x-7'>
          <Container>
            {" "}
            <MyImage source='/assets/logo/Facebook.svg' w={30} h={30} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/Facebook.svg'
              alt='Picture of the author'
              width={30}
              height={30}
              className=''
            /> */}
          </Container>
          <Container>
            {" "}
            <MyImage source='/assets/logo/Instagram.svg' w={30} h={30} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/Instagram.svg'
              alt='Picture of the author'
              width={30}
              height={30}
              className=''
            /> */}
          </Container>
          <Container>
            <MyImage source='/assets/logo/Linkedin.svg' w={30} h={30} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/Linkedin.svg'
              alt='Picture of the author'
              width={30}
              height={30}
              className=''
            /> */}
          </Container>
        </Flex>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {" 2022 © listri | Designed with passion by LISTRI"}
        </p>
      </Container>{" "}
    </Container>
  );
};
export default Footer;
