import Head from "next/head";
import NavPage from "../../components/all/nav-page";
import Container from "../../components/shared/composers/container";
import { motion } from "framer-motion";
import MyImage from "../../components/shared/composers/myimage";
import TitlePage from "../../components/all/titlePage";
const Realisation = () => {
  const titlepageprops = {
    title: "Coming soon ...",
    subtitle: "",
    description: "",
  };
  return (
    <NavPage current='Réalisations'>
      <Head>
        <title>Listri Agence Digitale - Réalisations</title>
        <meta
          name='description'
          content='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-white  py-28'>
        <Container className='text-center text-[40px] font-medium mb-10'>
          <TitlePage
            title={titlepageprops.title}
            subtitle={titlepageprops.subtitle}
            description={titlepageprops.description}
          />
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
