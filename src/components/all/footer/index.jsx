import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import Image from "next/image";
import Link from "next/link";
import MyImage from "../../shared/composers/myimage";

const Footer = () => {
  return (
    <Container>
      <Container className=' pt-10 bg-white' />
      <Container className='bg-white  m-auto w-full text-center pb-5 rounded-tl-[25px] rounded-tr-[25px] border-t-[3px] border-[#F9CCA6]'>
        {/* btn contact us  */}
        <Flex justify='center' className='  mt-[-28px] mb-5'>
          <Link href='/contactus' passHref>
            <a className=''>
              <Container className='border-[#FFFFFF] border-2 rounded-[27px] '>
                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[1px] rounded-[25px] shadow-realisationCard'>
                  <Flex
                    justify='center'
                    className='rounded-[25px]  bg-[#FFFFFF] py-[10px] px-4 t   max-w-[180px]  justify-center items-center'
                  >
                    <Container className=''>
                      <p className=' font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-[17px]'>
                        {"Contactez-nous "}
                      </p>
                    </Container>
                  </Flex>
                </Container>
              </Container>
            </a>
          </Link>
        </Flex>
        {/* reséaux sociaux  */}
        <Flex
          justify='between'
          className='px-7 pb-5 mx-8 md:justify-between'
          align='start'
        >
          <Container className='space-y-4 '>
            <Container className='mt-[-10px] mr-auto md:hidden'>
              <MyImage source='/assets/logo/listri.svg' w={100} h={50} />
            </Container>
            <Container className='hidden md:inline-flex md:mr-auto'>
              <p className=' font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-[17px]'>
                {"Contactez-nous : "}
              </p>
            </Container>
            <Container className='md:space-y-2'>
              <a href='tel:+32470/68.45.51'>
                {" "}
                <Flex>
                  <MyImage source='/assets/logo/phoneTeam.svg' w={20} h={20} />
                  <p className='ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                    {"+32470/68.45.51"}
                  </p>
                </Flex>
              </a>
              <a href='mailto:contact@listri.digital '>
                <Flex>
                  <MyImage source='/assets/logo/email.svg' w={20} h={20} />
                  <p className='ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                    {"contact@listri.digital"}
                  </p>
                </Flex>
              </a>
            </Container>
          </Container>
          <Container className='hidden md:inline-flex md:my-auto'>
            <MyImage
              source='/assets/logo/logolistri.svg'
              w={200}
              h={100}
              className=''
            />
          </Container>

          <Container className='md:min-w-[187px] md:flex  md:items-end space-y-2'>
            <Container>
              <a href='https://www.facebook.com/Listri.digital'>
                <Flex align='center'>
                  <p className='hidden md:inline-flex mr-2 font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-[17px]'>
                    {" "}
                    Facebook
                  </p>{" "}
                  <MyImage source='/assets/logo/Facebook.svg' w={30} h={30} />
                </Flex>
              </a>
            </Container>
            <Container>
              <a href='https://www.instagram.com/listri.digital'>
                <Flex align='center'>
                  <p className=' hidden md:inline-flex mr-2  font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-[17px]'>
                    {" "}
                    Instagram
                  </p>{" "}
                  <MyImage source='/assets/logo/Instagram.svg' w={30} h={30} />
                </Flex>
              </a>
            </Container>
            <Container>
              <a href='https://www.linkedin.com/company/listri-agence-digitale/'>
                <Flex align='center'>
                  <p className=' hidden md:inline-flex mr-2  font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-[17px]'>
                    {" "}
                    Linkedin
                  </p>{" "}
                  <MyImage source='/assets/logo/Linkedin.svg' w={30} h={30} />
                </Flex>
              </a>
            </Container>
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
