import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const ClientCardDesktop = () => {
  return (
    <Container className='w-full  space-y-20'>
      <Flex className='justify-end min-h-[250px]  ml-[35%] rounded-l-[24px]  shadow-realisationCard '>
        <Container className='m-auto  pl-10'>
          <Flex align='center' className=' justify-start mx-10 pb-6'>
            <Image
              src='/assets/logo/user.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              className='absolute'
            />
            <Container className='pl-20 text-center'>
              <Container className=' font-medium  text-[#37474F] '>
                Client
              </Container>
              <Container className='font-extralight text-[#37474F] '>
                Librairie
              </Container>
            </Container>
          </Flex>
          <Flex align='center' className=' justify-start mx-10'>
            <Image
              src='/assets/logo/settings.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              className='absolute'
            />
            <Container className='pl-20 text-center'>Marketing</Container>
          </Flex>
        </Container>{" "}
        <Container className='pr-[-140px] '>
          <Image
            src='/assets/logo/testvector.svg'
            alt='Picture of the author'
            width={800}
            height={260}
            className=''
          />
        </Container>
        <Container className='absolute '>
          {" "}
          <Image
            src='/assets/logo/Bookshop.svg'
            alt='Picture of the author'
            width={280}
            height={250}
            className='absolute'
          />
        </Container>{" "}
      </Flex>
      {/* NEW CARD */}
      <Flex className='justify-start   mr-[35%] rounded-r-[24px]  shadow-realisationCard '>
        <Container className='ml-[-140px] rotate-180'>
          <Image
            src='/assets/logo/testvector.svg'
            alt='Picture of the author'
            width={800}
            height={260}
            className=''
          />
        </Container>
        <Container className='absolute ml-10 '>
          {" "}
          <Image
            src='/assets/logo/costumes.svg'
            alt='Picture of the author'
            width={280}
            height={250}
            className='absolute'
          />
        </Container>{" "}
        <Container className='m-auto  pl-10'>
          <Flex align='center' className=' justify-start mx-10 pb-6'>
            <Image
              src='/assets/logo/user.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              className='absolute'
            />
            <Container className='pl-20 text-center'>
              <Container className=' font-medium  text-[#37474F] '>
                Client
              </Container>
              <Container className='font-extralight text-[#37474F] '>
                Librairie
              </Container>
            </Container>
          </Flex>
          <Flex align='center' className=' justify-start mx-10'>
            <Image
              src='/assets/logo/settings.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              className='absolute'
            />
            <Container className='pl-20 text-center'>Web Design</Container>
          </Flex>
        </Container>{" "}
      </Flex>
      {/* NEW CARD */}
      <Flex className='justify-end min-h-[250px]  ml-[35%] rounded-l-[24px]  shadow-realisationCard '>
        <Container className='m-auto  pl-10'>
          <Flex align='center' className=' justify-start mx-10 pb-6'>
            <Image
              src='/assets/logo/user.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              className='absolute'
            />
            <Container className='pl-20 text-center'>
              <Container className=' font-medium  text-[#37474F] '>
                Client
              </Container>
              <Container className='font-extralight text-[#37474F] '>
                Librairie
              </Container>
            </Container>
          </Flex>
          <Flex align='center' className=' justify-start mx-10'>
            <Image
              src='/assets/logo/settings.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              className='absolute'
            />
            <Container className='pl-20 text-center'>Marketing</Container>
          </Flex>
        </Container>{" "}
        <Container className='pr-[-140px] '>
          <Image
            src='/assets/logo/testvector.svg'
            alt='Picture of the author'
            width={800}
            height={260}
            className=''
          />
        </Container>
        <Container className='absolute '>
          {" "}
          <Image
            src='/assets/logo/shops.svg'
            alt='Picture of the author'
            width={280}
            height={250}
            className='absolute'
          />
        </Container>{" "}
      </Flex>
    </Container>
  );
};
export default ClientCardDesktop;
