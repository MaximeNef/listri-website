import Head from "next/head";
import React from "react";
import NavPage from "../../components/all/nav-page";
import Container from "../../components/shared/composers/container";
import BtnPrimaire from "../../components/shared/composers/ListriV2/btnPrimaire";

const Submitcontact = () => {
  return (
    <NavPage current='contactTest'>
      <Head>
        <title>
          Contactez-nous - Agence digitale dédiée aux entrepreneurs et PME
        </title>
        <meta
          name='description'
          content='Une question concernant nos services ou la création de site web, contactez-nous par téléphone 0470/68.45.51 ou via le formulaire suivant. 
        Votre devis gratuit'
        />
        <meta
          name='keywords'
          content='contact, contacter, coordonnées, adresse, téléphone, email, formulaire, localisation, listri digital, nous contacter'
        />
        <meta charset='UTF-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-white  text-default '>
        <Container className=' pt-28 mx-[25px]'>
          merci pour votre demande !
          <BtnPrimaire text={"accueil"} href={"/"} />
        </Container>
      </main>
    </NavPage>
  );
};

export default Submitcontact;
