import Image from "next/image";
import Link from "next/link";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import BtnServiceHero from "./btnServiceHero";
import ServiceHeroCard from "./ServiceHeroCard";
import { motion } from "framer-motion";
import MotionLeft from "../../shared/composers/motion-CardLeft";
import MotionBottom from "../../shared/composers/motion-textBottom";

const ServiceHero = () => {
  return (
    <Container className='relative my-8 '>
      {" "}
      <Flex
        type='col'
        align='center'
        className=' space-y-4 mb-8 mx-10 lg:hidden'
      >
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2 }}
        >
          <h2 className=' font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"Nos services "}
          </h2>
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className='font-semibold text-[#37474F]  text-[19px] text-center'>
            {" "}
            {"  Nous réalisons vos projets ensemble"}
          </Container>
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className='text-center font-light text-[#37474F] text-[17px]'>
            {
              " Nous réalisons vos projets ensemble partout ou nous alons. Nous réalisons vos projets ensemble partout ou nous alons. Nous réalisons"
            }
          </Container>
        </MotionBottom>
      </Flex>
      <Flex
        type='col'
        className='lg:flex-row lg:w-full lg:justify-center lg:items-center'
      >
        <Flex
          type='col'
          justify='center'
          className='mx-5 relative text-center space-y-8 mt-6 lg:flex-row lg:min-w-[60%]  lg:flex-wrap lg:mt-0 lg:pl-32 lg:pr-32'
        >
          <Container className='  space-y-8 lg:pt-20 lg:space-y-5'>
            <Container className='lg:w-1/2 lg:pb-[45px] '>
              <MotionLeft
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
              >
                <Link href='/services/creation-de-contenu' passHref>
                  <a>
                    <ServiceHeroCard
                      serviceName={"Création de contenu"}
                      ServiceDescription={
                        "Nous vous aidons à passer au niveau 3.0 Nous vous aidons à "
                      }
                      src={"/assets/logo/Blog.svg"}
                    />
                  </a>
                </Link>
              </MotionLeft>
            </Container>
            <Container className='   lg:w-1/2  lg:pb-[45px]'>
              <MotionLeft
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
              >
                {" "}
                <Link href='/services/website' passHref>
                  <a>
                    <ServiceHeroCard
                      serviceName={"Site web"}
                      ServiceDescription={
                        "Nous vous aidons à passer au niveau 3.0 Nous vous aidons à "
                      }
                      src={"/assets/logo/Computer.svg"}
                    />
                  </a>
                </Link>
              </MotionLeft>
            </Container>
          </Container>

          <Container className=' space-y-8 lg:space-y-5'>
            <Container className='lg:w-1/2 lg:pb-[45px] lg:pl-[65px]'>
              <MotionLeft
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
              >
                <Link href='/services/referencement' passHref>
                  <a>
                    <ServiceHeroCard
                      serviceName={"Référencement web"}
                      ServiceDescription={
                        "Nous vous aidons à passer au niveau 3.0 Nous vous aidons à "
                      }
                      src={"/assets/logo/Affiliate.svg"}
                    />
                  </a>
                </Link>
              </MotionLeft>
            </Container>
            <Container className='lg:w-1/2 lg:pl-[65px] hidden lg:inline-flex '>
              <Link href='/services/socialMedia' passHref>
                <a>
                  <ServiceHeroCard
                    serviceName={"Social Media"}
                    ServiceDescription={
                      "Nous vous aidons à passer au niveau 3.0 Nous vous aidons à "
                    }
                    src={"/assets/logo/Blog.svg"}
                  />
                </a>
              </Link>
            </Container>
          </Container>
        </Flex>

        <Container className=' lg:mb-32'>
          <Flex className='hidden lg:inline-flex'>
            {" "}
            <Flex type='col' align='center' className=' space-y-4 mb-8 mx-10'>
              <h2 className=' font-medium text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {"Nos services"}
              </h2>
              <Container className='font-semibold text-[#37474F] text-[28px] break-normal  text-center'>
                {" Réalisons vos projets ensemble"}
              </Container>
              <Container className='text-center font-light text-[#37474F] text-[17px]'>
                {
                  " Nous réalisons vos projets ensemble partout ou nous alons. Nous réalisons vos projets ensemble partout ou nous alons. Nous réalisons"
                }
              </Container>
            </Flex>
          </Flex>
          <BtnServiceHero />
        </Container>
      </Flex>
    </Container>
  );
};
export default ServiceHero;
