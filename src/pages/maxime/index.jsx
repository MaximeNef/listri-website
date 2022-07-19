import Head from "next/head";
import Container from "../../components/shared/composers/container";
import Flex from "../../components/shared/composers/Flex";
import MyImage from "../../components/shared/composers/myimage";

export default function Maxime() {
  const contacts = [
    {
      src: "/assets/logo/telContact.svg",
      nom: "Téléphone",
      link: "tel:0472860828",
    },
    {
      src: "/assets/logo/messageContact.svg",
      nom: "Message",
      link: "sms:0472860828",
    },
    {
      src: "/assets/logo/emailContact.svg",
      nom: "Mail",
      link: "mailto:maxime@listri.digital",
    },
    {
      src: "/assets/logo/WhatsappContact.svg",
      nom: "Whatsapp",
      link: "whatsapp:0472860828",
    },
  ];
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
  const autres = [
    {
      src: "/assets/logo/siteContact.svg",
      nom: "Site web",
      link: "https://listri.digital/",
    },
    {
      src: "/assets/logo/services.svg",
      nom: "Nos services",
      link: "https://listri.digital/services/",
    },
    {
      src: "/assets/logo/rocketContact.svg",
      nom: "Votre projet",
      link: "https://listri.digital/contactus/",
    },
  ];
  return (
    <Container className='bg-black'>
      <Head>
        <title>Listri Agence Digitale</title>
        <meta
          name='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
          content='Generated by Listri'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-[#FFFAF5]    text-[#37474F]'>
        {" "}
        <Container className='relative '>
          {" "}
          <Container className='fixed top-[150px] w-full h-full bg-[#FFFAF5] '>
            <MyImage
              source={"/assets/logo/listripagecard.svg"}
              h={497}
              w={368}
              className='absolute'
              layout={"fill"}
            />
          </Container>
          <Container className='mx-auto rounded-full    z-20 shadow-realisationCard'>
            <MyImage
              source={"/assets/logo/avatar.png"}
              h={150}
              w={150}
              className={"rounded-[180px] "}
            />
          </Container>
        </Container>{" "}
        <Container className='relative mx-5'>
          <p className='mx-auto text-[40px]'>{"Julien Nef"}</p>
          <p className='mx-auto text-[12px]'>
            {"Vous faites la différence nous le communiquons  "}
          </p>
          <Container className='w-full h-[2px] bg-gray-300 ' />
          {/*  CONTACTEZ_MOI  */}
          <p className='mx-auto text-[25px]'>{" Contactez-moi"}</p>
          <Container className=' mt-6 mb-3'>
            <Flex justify='between' align='center'>
              {contacts.map(function (contact, i) {
                return (
                  <Container key={i}>
                    <a
                      href={contact.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Container>
                        <MyImage
                          source={contact.src}
                          h={40}
                          w={49}
                          className='mx-auto'
                        />
                      </Container>

                      <p className='text-center text-[15px] mt-2'>
                        {contact.nom}
                      </p>
                    </a>
                  </Container>
                );
              })}
            </Flex>
          </Container>
          <Container className='w-full h-[2px] bg-gray-300 ' />
          {/*  SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL   */}
          <p className='mx-auto text-[25px]'>{" Social"}</p>
          <Container className=' mt-6 mb-3'>
            <Flex justify='between' align='center'>
              {socials.map(function (social, i) {
                return (
                  <Container key={i} className='min-w-[30%]'>
                    <a
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Container>
                        <MyImage
                          source={social.src}
                          h={40}
                          w={49}
                          className='mx-auto'
                        />
                      </Container>

                      <p className='text-center text-[15px] mt-2'>
                        {social.nom}
                      </p>
                    </a>
                  </Container>
                );
              })}
            </Flex>
          </Container>
          {/*  SOCIAL SOCIAL SOCIAL SOCIAL SOCIAL   */}
          <Container className='w-full h-[2px] bg-gray-300 ' />
          {/*  AUTRE AUTRE AUTRE AUTRE  AUTRE AUTRE AUTRE */}
          <p className='mx-auto text-[25px]'>{"Autre"}</p>
          <Container className=' mt-6 mb-3'>
            <Flex justify='between' align='center' className=''>
              {autres.map(function (autre, i) {
                return (
                  <Container key={i} className='min-w-[30%]'>
                    <a
                      href={autre.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Container>
                        <MyImage
                          source={autre.src}
                          h={40}
                          w={49}
                          className='mx-auto'
                        />
                      </Container>

                      <p className='text-center text-[15px] mt-2'>
                        {autre.nom}
                      </p>
                    </a>
                  </Container>
                );
              })}
            </Flex>
          </Container>
          {/*   AUTRE AUTRE AUTRE AUTRE  AUTRE AUTRE AUTREAUTREAUTRE  */}
        </Container>{" "}
      </main>
    </Container>
  );
}
