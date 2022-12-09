import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavPage from "../../components/all/nav-page";
import ServiceCard from "../../components/services/serviceCard";
import ServiceImage from "../../components/services/serviceImage";
import ServiceTitle from "../../components/services/serviceTitle";
import Container from "../../components/shared/composers/container";
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import MotionLeft from "../../components/shared/composers/motion-CardLeft";
const Services = () => {
  const [data, setData] = useState({ name: "" });
  const [services, setServices] = useState([
    {
      id: "creation-de-contenu",
      title: "Création de contenu",
      subtitle: "UX/UI Design & Mobile Application Development",
      src: "/assets/logo/Blog.svg",
    },
    {
      id: "social-media",
      title: "Social média",
      subtitle: "UX/UI Design & Mobile Application Development",
      src: "/assets/logo/Blog.svg",
    },
  ]);
  const [services2, setServices2] = useState([
    {
      id: "website",
      title: "Web Site",
      subtitle: "UX/UI Design & Mobile Application Development",
      src: "/assets/logo/Computer.svg",
    },
    {
      id: "Optimisation-Web",
      title: "Optimisation Web",
      subtitle: "Optimisation Web",
      src: "/assets/logo/Blog.svg",
    },
  ]);
  const [services3, setServices3] = useState([
    {
      id: "referencement",
      title: "Référencement web",
      subtitle: "UX/UI Design & Mobile Application Development",
      src: "/assets/logo/Computer.svg",
    },
    {
      id: "Digital-business-card",
      title: "Digital business card",
      subtitle: "Digital-business-card",
      src: "/assets/logo/Blog.svg",
    },
  ]);
  return (
    <NavPage current='Services'>
      {" "}
      <Head>
        <title>
          Nos services digitaux - Fait sur-mesure pour votre entreprise
        </title>
        <meta
          name='description'
          content='Listri Digital propose aux indépendants et PME les mêmes services que les grandes marques de la conception de votre site jusqu’à votre marketing digital'
        />
        <meta
          name='keywords'
          content='Services de marketing numérique, gestion des réseaux sociaux, Optimisation des moteurs de recherche (SEO), Publicité en ligne, Marketing digital, création de contenu, Services de création de site web, Services de stratégie numérique, optimisation site web'
        />
        <meta charset='UTF-8' />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-white  py-28 '>
        <div className='absolute inset-0 flex items-center justify-center'></div>
        <ServiceTitle />{" "}
        <Container className='md:flex md:flex-row md:justify-center md:items-start md:w-full'>
          <Container className='mx-5 relative text-center space-y-8 mt-6 md:mt-0'>
            {services.map((service, i) => (
              <MotionLeft
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.8 }}
                key={i}
              >
                <Link
                  href={`/services/${service.id}`}
                  as={`/services/${service.id}`}
                  passHref
                >
                  <a>
                    <ServiceCard
                      key={service.id}
                      serviceName={service.title}
                      service={service}
                      src={service.src}
                    />
                  </a>
                </Link>
              </MotionLeft>
            ))}
          </Container>
          <Container className='inline-flex md:hidden'>
            <ServiceImage />
          </Container>
          <Container className='mx-5 relative text-center space-y-8 md:flex '>
            {services2.map((service, i) => (
              <MotionLeft
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
                key={i}
              >
                <Link
                  href={`/services/${service.id}`}
                  as={`/services/${service.id}`}
                  passHref
                >
                  <a>
                    <ServiceCard
                      key={service.id}
                      serviceName={service.title}
                      service={service}
                      src={service.src}
                    />
                  </a>
                </Link>{" "}
              </MotionLeft>
            ))}
          </Container>{" "}
          <Container className='mt-8 md:mt-0 mx-5 relative text-center space-y-8 md:flex '>
            {services3.map((service, i) => (
              <MotionLeft
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
                key={i}
              >
                <Link
                  href={`/services/${service.id}`}
                  as={`/services/${service.id}`}
                  passHref
                >
                  <a>
                    <ServiceCard
                      key={service.id}
                      serviceName={service.title}
                      service={service}
                      src={service.src}
                    />
                  </a>
                </Link>{" "}
              </MotionLeft>
            ))}
          </Container>{" "}
          <Container className='hidden md:inline-flex'>
            <ServiceImage />
          </Container>
        </Container>
      </main>
    </NavPage>
  );
};
export default Services;
