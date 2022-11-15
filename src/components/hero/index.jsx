import Container from "../shared/composers/container";
import Image from "next/image";
import Typed from "react-typed";
import Flex from "../shared/composers/flex";
import { motion } from "framer-motion";
import MyImage from "../shared/composers/myimage";
import Lottie from "react-lottie";
import burgerMenu from "./../../../public/bglotties.json";
// const myLoader = ({ src, width, quality }) => {
//   console.log(myLoader, "myloader");
//   console.log(src, "myloader");

//   return `${src}`;
// };

const Hero = () => {
  const defaultOptions = {
    name: "menuBurger",
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container className='lg:min-h-full'>
      <Flex type='col' className='lg:hidden'>
        <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
          <MyImage source='assets/logo/hero.svg' h={500} w={500} />
          {/* <Image
            loader={myLoader}
            src='public/assets/logo/hero.svg'
            alt='Picture of the author'
            width={500}
            height={500}
            className=''
          /> */}
        </motion.div>

        <Flex className='mx-auto my-16'>
          <Container
            className='mr-1  text-xl font-medium text-[#37474F]
        '
          >
            <h1>une agence digitale</h1>
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
          className='hidden lg:inline-flex lg:max-w-[1180px] lg:m-auto lg:w-full z-20'
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
              <MyImage source='assets/logo/listri.svg' h={250} w={500} />
              {/* <Image
                loader={myLoader}
                src='/public/assets/logo/listri.svg'
                alt='Picture of the author'
                width={500}
                height={250}
                className=''
              /> */}
            </Flex>
            <Flex className='mt-5'>
              <Container
                className='mr-2  text-4xl font-medium text-[#37474F]
        '
              >
                <h1>une agence digitale </h1>
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
            <MyImage source='/assets/logo/heroDesktop.svg' h={500} w={500} />
            {/* <Image
              loader={myLoader}
              src='/assets/logo/heroDesktop.svg'
              alt='Picture of the author'
              width={500}
              height={500}
              className=''
            /> */}
          </Container>
        </Flex>{" "}
      </Container>
    </Container>
  );
};
export default Hero;
