import Head from "next/head";
import Image from "next/image";
import NavPage from "../../components/all/nav-page";
import ClientCardDesktop from "../../components/hero/clientHero/clientCardDesktop";
import Container from "../../components/shared/composers/container";
import { motion } from "framer-motion";
import MyImage from "../../components/shared/composers/myimage";
const Realisation = () => {
  return (
    <NavPage current='Réalisations'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-[#FFFAF5]  py-28'>
        <Container className='text-center text-[40px] font-medium mb-10'>
          {" "}
          Comming soon ...
        </Container>
        <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
          <MyImage source='/assets/logo/Process.svg' w={400} h={400} />
          {/* <Image
            src='/assets/logo/Process.svg'
            alt='Picture of the author'
            width={400}
            height={400}
            className=''
          /> */}
        </motion.div>
      </main>
    </NavPage>
  );
};
export default Realisation;
