import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <Container className='pt-12 bg-[#FFFAF5]' />
      <Container className='bg-[#FF7E00]/60 text-white m-auto w-full text-center pb-5 '>
        {/* btn contact us  */}
        <Flex justify='center' className='  mt-[-25px] mb-5'>
          <Link href='/contact'>
            <a className=''>
              <Flex
                justify='center'
                className='rounded-[25px]  bg-gradient-to-r from-[#FF7E00] to-[#FDBB7E] py-[10px] px-4 text-white   max-w-[180px] border-2  border-[#FFFAF5] justify-center items-center'
              >
                <Image
                  src='/assets/logo/email.svg'
                  alt='Picture of the author'
                  width={40}
                  height={30}
                  className=''
                />

                <Container className='ml-2 font-medium'> contact us </Container>
              </Flex>
            </a>
          </Link>
        </Flex>
        {/* reséaux sociaux  */}
        <Flex justify='center' className='px-7 pb-5 space-x-7'>
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
      </Container>{" "}
    </Container>
  );
};
export default Footer;
