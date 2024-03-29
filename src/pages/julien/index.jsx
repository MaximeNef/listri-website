import Head from "next/head";
import BoutonCTA from "../../components/businessCard/BoutonCTA";
import Reseaux from "../../components/businessCard/reseaux";
import Container from "../../components/shared/composers/container";
import MyImage from "../../components/shared/composers/myimage";

import React from "react";
import CardContact from "../../components/businessCard/CardContact";

export default function Julien() {
  const contactInfo = {
    img: "/assets/logo/julien.png",
    nom: "Julien Nef",
    tel: "0470684551",
    email: "julien@listri.digital",
  };
  const socials = [
    {
      src: "/assets/logo/fbContact.svg",
      nom: "Facebook",
      link: "https://www.facebook.com/Listri.digital",
    },
    {
      src: "/assets/logo/instaContact.svg",
      nom: "Instagram",
      link: "https://www.instagram.com/listri.digital/",
    },
    {
      src: "/assets/logo/LkdContact.svg",
      nom: "Linkedin",
      link: "https://www.linkedin.com/company/listri-agence-digitale/",
    },
  ];
  const btnCtaS = [
    {
      text: "APPELEZ-MOI",
      link: "tel:0470684551",
    },
    {
      text: "VISITEZ NOTRE SITE",
      link: "/",
    },
    {
      text: "DÉCOUVREZ NOS SERVICES",
      link: "/services",
    },
    {
      text: "VISITES VIRTUELLES",
      link: "https://www.immersy.be/",
    },
    {
      text: "PRENEZ RENDEZ-VOUS",
      link: "https://meetings-eu1.hubspot.com/julien-nef",
    },
  ];

  return (
    <Container className=''>
      <Head>
        <title>Listri Agence Digitale</title>
        <meta name='description' content='find the best for you' />
        <meta charset='UTF-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className=' bg-white  text-[#37474F] z-20 '>
        {" "}
        <div className=' h-[200px] pt-[20px]  bg-white/0'>
          <div className=' h-[200px] relative'>
            {" "}
            <MyImage source='/assets/logo/listriOrange.svg' layout={"fill"} />
          </div>
        </div>{" "}
        <div className=''>
          <CardContact contactInfo={contactInfo} color={"bg-white"} />
          <Reseaux socials={socials} />
          {btnCtaS.map((btnCta, i) => {
            return <BoutonCTA key={i} btnCta={btnCta} current={true} />;
          })}{" "}
          <div className='absolute  w-full h-full top-[36%]  z-[-10] '>
            <MyImage source='/assets/logo/vagueFinale.svg' layout={"fill"} />
          </div>
        </div>{" "}
      </main>{" "}
    </Container>
  );
}
