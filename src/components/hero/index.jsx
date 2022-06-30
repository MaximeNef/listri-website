import Container from "../shared/composers/container";
import Image from "next/image";
import Typed from "react-typed";
import Flex from "../shared/composers/flex";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container className='lg:min-h-full'>
      <Flex type='col' className='lg:hidden'>
        <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
          <Image
            src='/assets/logo/hero.svg'
            alt='Picture of the author'
            width={500}
            height={500}
            className=''
          />
        </motion.div>

        <Flex className='mx-auto my-16'>
          <Container
            className='mr-1  text-xl font-medium text-[#37474F]
        '
          >
            {" "}
            une agence digitale{" "}
          </Container>

          <Container className=''>
            <Typed
              strings={["dynamique", "à l'écoute", "créative"]}
              typeSpeed={40}
              backSpeed={100}
              loop
              className=' text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] '
            />
          </Container>
        </Flex>
      </Flex>
      {/*  responsive desktop  */}
      <Container className='lg:min-h-screen'>
        <Flex
          type='row'
          className='hidden lg:inline-flex lg:max-w-[1180px] lg:m-auto lg:w-full'
        >
          {" "}
          <Flex
            type='col'
            className='mx-auto my-16'
            justify='center'
            align='start'
          >
            {" "}
            <Flex className=''>
              <Image
                src='/assets/logo/listri.svg'
                alt='Picture of the author'
                width={500}
                height={250}
                className=''
              />
            </Flex>
            <Flex className='mt-5'>
              <Container
                className='mr-2  text-4xl font-medium text-[#37474F]
        '
              >
                {" "}
                une agence digitale{" "}
              </Container>
              <Container className=''>
                <Typed
                  strings={[" dynamique", " à l'écoute", " créative"]}
                  typeSpeed={40}
                  backSpeed={100}
                  loop
                  className=' text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] '
                />
              </Container>
            </Flex>
          </Flex>
          <Container className=' mt-12 '>
            <Image
              src='/assets/logo/heroDesktop.svg'
              alt='Picture of the author'
              width={500}
              height={500}
              className=''
            />
          </Container>
        </Flex>{" "}
      </Container>
    </Container>
  );
};
export default Hero;
