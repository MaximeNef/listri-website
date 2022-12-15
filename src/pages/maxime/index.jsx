import Head from "next/head";
import { useState } from "react";
import BoutonCTA from "../../components/businessCard/BoutonCTA";
import Reseaux from "../../components/businessCard/reseaux";
import Container from "../../components/shared/composers/container";
import Flex from "../../components/shared/composers/flex";
import MyImage from "../../components/shared/composers/myimage";

import React from "react";
import { response } from "next";
import CardContact from "../../components/businessCard/CardContact";
export default function Maxime() {
  const contactInfo = {
    img: "/assets/logo/maximebg.png",
    nom: "Maxime Nef",
    tel: "0472860828",
    email: "maxime@listri.digital",
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
      link: "tel:0472860828",
    },
    {
      text: "VISITER NOTRE SITE",
      link: "/",
    },
    {
      text: "NOS SERVICES",
      link: "/services",
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

      <main className=' bg-white  text-[#37474F]'>
        <div className=' h-[200px] pt-[20px]  bg-gradient-to-b from-[#283445]/[.65] to-[#FFF] '>
          <div className=' h-[200px] relative'>
            {" "}
            <MyImage source='/assets/logo/ListriGray.svg' layout={"fill"} />
          </div>
        </div>
        <div className=' '>
          <CardContact contactInfo={contactInfo} />
          <Reseaux socials={socials} />
          {btnCtaS.map((btnCta, i) => {
            return <BoutonCTA key={i} btnCta={btnCta} />;
          })}
        </div>
      </main>
    </Container>
  );
}

// import Head from "next/head";
// import Container from "../../components/shared/composers/container";
// import Flex from "../../components/shared/composers/flex";
// import MyImage from "../../components/shared/composers/myimage";

// export default function Maxime() {
//   const contacts = [
//     {
//       src: "/assets/logo/telContact.svg",
//       nom: "Téléphone",
//       link: "tel:0472860828",
//     },
//     {
//       src: "/assets/logo/msgContact.svg",
//       nom: "Message",
//       link: "sms:0472860828",
//     },
//     {
//       src: "/assets/logo/emailContact.svg",
//       nom: "Mail",
//       link: "mailto:maxime@listri.digital",
//     },
//   ];
//   const socials = [
//     {
//       src: "/assets/logo/fbContact.svg",
//       nom: "Facebook",
//       link: "https://www.facebook.com/Listri.digital",
//     },
//     {
//       src: "/assets/logo/instaContact.svg",
//       nom: "Instagram",
//       link: "https://www.instagram.com/listri.digital/",
//     },
//     {
//       src: "/assets/logo/LkdContact.svg",
//       nom: "Linkedin",
//       link: "https://www.linkedin.com/company/listri-agence-digitale/",
//     },
//   ];
//   const autres = [
//     {
//       src: "/assets/logo/siteContact.svg",
//       nom: "Site web",
//       link: "https://listri.digital/",
//     },
//     {
//       src: "/assets/logo/services.svg",
//       nom: "Nos services",
//       link: "https://listri.digital/services/",
//     },
//     {
//       src: "/assets/logo/rocketContact.svg",
//       nom: "Votre projet",
//       link: "https://listri.digital/contactus/",
//     },
//   ];
//   return (
//     <Container className=''>
//       <Head>
//         <title>Listri Agence Digitale</title>
//         <meta name='description' content='Find the best for you' />
//         <meta charset='UTF-8' />
//         <link rel='shortcut icon' href='/favicon.ico' />
//         <link rel='preconnect' href='https://fonts.googleapis.com' />
//         <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
//         <link
//           href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
//           rel='stylesheet'
//         />
//       </Head>

//       <main className=' bg-white h-[89vh]    text-[#37474F]'>
//         {" "}
//         <Container className='relative '>
//           {" "}
//           <Container className='mx-auto rounded-full mt-2    z-20 shadow-realisationCard'>
//             <MyImage
//               source={"/assets/logo/maxime.png"}
//               h={140}
//               w={140}
//               className={"rounded-[180px] "}
//             />
//           </Container>
//         </Container>{" "}
//         <Container className='relative mx-5'>
//           <p className='mx-auto text-[40px]'>{"Maxime Nef"}</p>
//           <p className='mx-auto text-[12px] mb-6'>
//             {"Vous faites la différence nous le communiquons  "}
//           </p>
//           {/* <Container className='w-full h-[1px] bg-gray-300 mb-4' /> */}
//           {/*  CONTACTEZ_MOI  */}
//           <p className='mx-auto text-[25px]'>{" Contactez-moi"}</p>
//           <Container className=' mt-2 mb-6'>
//             <Flex justify='between' align='center'>
//               {contacts.map(function (contact, i) {
//                 return (
//                   <Container key={i} className='min-w-[30%]'>
//                     <a
//                       href={contact.link}
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       <Container>
//                         <MyImage
//                           source={contact.src}
//                           h={40}
//                           w={49}
//                           className='mx-auto'
//                         />
//                       </Container>

//                       {/* <p className='text-center text-[15px] mt-2'>
//                       {contact.nom}
//                     </p> */}
//                     </a>
//                   </Container>
//                 );
//               })}
//             </Flex>
//           </Container>
//           <Container className='w-full h-[1px] bg-gray-300 mb-4' />
//           {/*  SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL   */}
//           <p className='mx-auto text-[25px]'>{"Social"}</p>
//           <Container className=' mt-2 mb-6'>
//             <Flex justify='between' align='center'>
//               {socials.map(function (social, i) {
//                 return (
//                   <Container key={i} className='min-w-[30%]'>
//                     <a
//                       href={social.link}
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       <Container>
//                         <MyImage
//                           source={social.src}
//                           h={40}
//                           w={49}
//                           className='mx-auto'
//                         />
//                       </Container>

//                       {/* <p className='text-center text-[15px] mt-2'>
//                       {social.nom}
//                     </p> */}
//                     </a>
//                   </Container>
//                 );
//               })}
//             </Flex>
//           </Container>
//           {/*  SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL   */}
//           <Container className='w-full h-[1px] bg-gray-300 mb-4' />
//           {/*  AUTRE AUTRE AUTRE AUTRE  AUTRE AUTRE AUTRE */}
//           <p className='mx-auto text-[25px]'>{"Autres"}</p>
//           <Container className=' mt-2 '>
//             <Flex justify='between' align='center'>
//               {autres.map(function (autre, i) {
//                 return (
//                   <Container key={i} className='min-w-[30%]'>
//                     <a
//                       href={autre.link}
//                       target='_blank'
//                       rel='noopener noreferrer'
//                     >
//                       <Container>
//                         <MyImage
//                           source={autre.src}
//                           h={40}
//                           w={49}
//                           className='mx-auto'
//                         />
//                       </Container>

//                       {/* <p className='text-center text-[15px] mt-2'>
//                         {autre.nom}
//                       </p> */}
//                     </a>
//                   </Container>
//                 );
//               })}
//             </Flex>
//           </Container>
//           {/*   AUTRE AUTRE AUTRE AUTRE  AUTRE AUTRE AUTRE  */}
//         </Container>{" "}
//       </main>
//     </Container>
//   );
// }
