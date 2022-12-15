import Head from "next/head";
import BoutonCTA from "../../components/businessCard/BoutonCTA";
import Reseaux from "../../components/businessCard/reseaux";
import Container from "../../components/shared/composers/container";
import Flex from "../../components/shared/composers/flex";
import MyImage from "../../components/shared/composers/myimage";

export default function Julien() {
  // const contacts = [
  //   {
  //     src: "/assets/logo/telContact.svg",
  //     nom: "Téléphone",
  //     link: "tel:0470684551",
  //   },
  //   {
  //     src: "/assets/logo/msgContact.svg",
  //     nom: "Message",
  //     link: "sms:0470684551",
  //   },
  //   {
  //     src: "/assets/logo/emailContact.svg",
  //     nom: "Mail",
  //     link: "mailto:julien@listri.digital",
  //   },
  // ];
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
      text: "VISITER NOTRE SITE",
      link: "/",
    },
    {
      text: "NOS SERVICES",
      link: "/services",
    },
  ];

  // const autres = [
  //   {
  //     src: "/assets/logo/siteContact.svg",
  //     nom: "Site web",
  //     link: "https://listri.digital/",
  //   },
  //   {
  //     src: "/assets/logo/services.svg",
  //     nom: "Nos services",
  //     link: "https://listri.digital/services/",
  //   },
  //   {
  //     src: "/assets/logo/rocketContact.svg",
  //     nom: "Votre projet",
  //     link: "https://listri.digital/contactus/",
  //   },
  // ];
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
      <style jsx>{`
        #blue-wave {
          clip-path: polygon(
            100% 0%,
            0% 0%,
            0% 65%,
            1% 64.95%,
            2% 64.78%,
            3% 64.51%,
            4% 64.13%,
            5% 63.65%,
            6% 63.07%,
            7% 62.39%,
            8% 61.63%,
            9% 60.78%,
            10% 59.85%,
            11% 58.84%,
            12% 57.78%,
            13% 56.65%,
            14% 55.48%,
            15% 54.27%,
            16% 53.03%,
            17% 51.76%,
            18% 50.48%,
            19% 49.2%,
            20% 47.93%,
            21% 46.67%,
            22% 45.43%,
            23% 44.23%,
            24% 43.07%,
            25% 41.96%,
            26% 40.91%,
            27% 39.92%,
            28% 39.01%,
            29% 38.18%,
            30% 37.43%,
            31% 36.78%,
            32% 36.22%,
            33% 35.77%,
            34% 35.41%,
            35% 35.17%,
            36% 35.03%,
            37% 35%,
            38% 35.08%,
            39% 35.27%,
            40% 35.57%,
            41% 35.98%,
            42% 36.48%,
            43% 37.09%,
            44% 37.78%,
            45% 38.57%,
            46% 39.44%,
            47% 40.39%,
            48% 41.41%,
            49% 42.49%,
            50% 43.63%,
            51% 44.81%,
            52% 46.03%,
            53% 47.28%,
            54% 48.55%,
            55% 49.83%,
            56% 51.11%,
            57% 52.38%,
            58% 53.64%,
            59% 54.87%,
            60% 56.06%,
            61% 57.21%,
            62% 58.3%,
            63% 59.34%,
            64% 60.31%,
            65% 61.2%,
            66% 62.01%,
            67% 62.74%,
            68% 63.37%,
            69% 63.9%,
            70% 64.33%,
            71% 64.66%,
            72% 64.87%,
            73% 64.99%,
            74% 64.99%,
            75% 64.88%,
            76% 64.66%,
            77% 64.34%,
            78% 63.91%,
            79% 63.38%,
            80% 62.75%,
            81% 62.03%,
            82% 61.22%,
            83% 60.33%,
            84% 59.37%,
            85% 58.33%,
            86% 57.24%,
            87% 56.09%,
            88% 54.9%,
            89% 53.67%,
            90% 52.41%,
            91% 51.14%,
            92% 49.86%,
            93% 48.58%,
            94% 47.31%,
            95% 46.06%,
            96% 44.84%,
            97% 43.66%,
            98% 42.52%,
            99% 41.44%,
            100% 40.42%
          );
          background: #1a2341;
        }
      `}</style>

      <main className=' bg-white  text-[#37474F]'>
        <div className="bg-[url('/assets/logo/hero-pattern.svg')] h-[250px] relative">
          <MyImage source='/assets/logo/ListriGray.svg' layout={"fill"} />
        </div>

        <Reseaux socials={socials} />

        {btnCtaS.map((btnCta, i) => {
          return <BoutonCTA key={i} btnCta={btnCta} />;
        })}
      </main>
    </Container>
  );
}

// <Container className='relative '>
// {" "}
// <Container className='mx-auto rounded-full mt-2    z-20 shadow-realisationCard'>
//   <MyImage
//     source={"/assets/logo/avatar.png"}
//     h={140}
//     w={140}
//     className={"rounded-[180px] "}
//   />
// </Container>
// </Container>{" "}
// <Container className='relative mx-5'>
// <p className='mx-auto text-[40px]'>{"Julien Nef"}</p>
// <p className='mx-auto text-[12px] mb-6'>
//   {"Vous faites la différence nous le communiquons  "}
// </p>
// {/* <Container className='w-full h-[1px] bg-gray-300 mb-4' /> */}
// {/*  CONTACTEZ_MOI  */}
// <p className='mx-auto text-[25px]'>{" Contactez-moi"}</p>
// <Container className=' mt-2 mb-6'>
//   <Flex justify='between' align='center'>
//     {contacts.map(function (contact, i) {
//       return (
//         <Container key={i} className='min-w-[30%]'>
//           <a
//             href={contact.link}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <Container>
//               <MyImage
//                 source={contact.src}
//                 h={40}
//                 w={49}
//                 className='mx-auto'
//               />
//             </Container>

//             {/* <p className='text-center text-[15px] mt-2'>
//               {contact.nom}
//             </p> */}
//           </a>
//         </Container>
//       );
//     })}
//   </Flex>
// </Container>
// <Container className='w-full h-[1px] bg-gray-300 mb-4' />
// {/*  SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL   */}
// <p className='mx-auto text-[25px]'>{"Social"}</p>
// <Container className=' mt-2 mb-6'>
//   <Flex justify='between' align='center'>
//     {socials.map(function (social, i) {
//       return (
//         <Container key={i} className='min-w-[30%]'>
//           <a
//             href={social.link}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <Container>
//               <MyImage
//                 source={social.src}
//                 h={40}
//                 w={49}
//                 className='mx-auto'
//               />
//             </Container>

//             {/* <p className='text-center text-[15px] mt-2'>
//               {social.nom}
//             </p> */}
//           </a>
//         </Container>
//       );
//     })}
//   </Flex>
// </Container>
// {/*  SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL   */}
// <Container className='w-full h-[1px] bg-gray-300 mb-4' />
// {/*  AUTRE AUTRE AUTRE AUTRE  AUTRE AUTRE AUTRE */}
// <p className='mx-auto text-[25px]'>{"Autres"}</p>
// <Container className=' mt-2 mb-11 '>
//   <Flex justify='between' align='center'>
//     {autres.map(function (autre, i) {
//       return (
//         <Container key={i} className='min-w-[30%]'>
//           <a
//             href={autre.link}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <Container>
//               <MyImage
//                 source={autre.src}
//                 h={40}
//                 w={49}
//                 className='mx-auto'
//               />
//             </Container>

//             {/* <p className='text-center text-[15px] mt-2'>
//               {autre.nom}
//             </p> */}
//           </a>
//         </Container>
//       );
//     })}
//   </Flex>
// </Container>
// {/*   AUTRE AUTRE AUTRE AUTRE  AUTRE AUTRE AUTRE  */}
// </Container>{" "}
