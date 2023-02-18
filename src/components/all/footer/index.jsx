import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const Footer = () => {
  return (
    <Container className='mt-[140px]'>
      <Container className=' bg-darkBlue pt-10 m-auto w-full text-center pb-5'>
        {/* reséaux sociaux  */}
        <Flex
          justify='between'
          className='px-7 pb-5  md:justify-between'
          align='start'
        >
          <Container className='space-y-4 '>
            <Container className='mt-[-10px] mr-auto md:hidden'>
              <MyImage source='/assets/logov2/listriWhite.svg' w={40} h={50} />
            </Container>
            <Container className='hidden md:inline-flex md:mr-auto'>
              <p className=' font-medium  text-[17px]'>{"Contactez-nous : "}</p>
            </Container>
            <Container className='md:space-y-2'>
              <a href='tel:+32470/68.45.51'>
                {" "}
                <Flex>
                  <MyImage
                    source='/assets/logoV2/phone-with.svg'
                    w={20}
                    h={20}
                  />
                  <p className='ml-1 text-lightGrey'>{"+32 470/68.45.51"}</p>
                </Flex>
              </a>
              <a href='mailto:contact@listri.digital '>
                <Flex>
                  <MyImage source='/assets/logoV2/email.svg' w={20} h={20} />
                  <p className='ml-2 text-lightGrey'>
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
                  <MyImage source='/assets/logoV2/Facebook.svg' w={30} h={30} />
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
                  <MyImage
                    source='/assets/logoV2/Instagram.svg'
                    w={30}
                    h={30}
                  />
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
                  <MyImage source='/assets/logoV2/Linkedin.svg' w={30} h={30} />
                </Flex>
              </a>
            </Container>
          </Container>
        </Flex>
        <p className='text-lightGrey'>
          {" 2022 © listri | Designed with passion by LISTRI"}
        </p>
      </Container>{" "}
    </Container>
  );
};
export default Footer;
