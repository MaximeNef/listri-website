import Head from "next/head";
import Image from "next/image";
import NavPage from "../../components/all/nav-page";
import ClientCardDesktop from "../../components/hero/clientHero/clientCardDesktop";
import Container from "../../components/shared/composers/container";
import { motion } from "framer-motion";
import MyImage from "../../components/shared/composers/myimage";
import Flex from "../../components/shared/composers/flex";
const Realisation = () => {
  return (
    <NavPage current='Réalisations'>
      <Head>
        <title>Listri Agence Digitale - Réalisations</title>
        <meta
          name='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
          content='Generated by Listri'
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-[#FFFAF5]  py-28'>
        <Container className='text-center text-[40px] font-medium mb-10'>
          {"Coming soon ... "}
        </Container>
        <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
          <Container className='mx-auto'>
            <MyImage source='/assets/logo/Process.svg' w={400} h={500} />
          </Container>
        </motion.div>
      </main>
    </NavPage>
  );
};
export default Realisation;
