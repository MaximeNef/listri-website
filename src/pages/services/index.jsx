import Head from "next/head";

import NavPage from "../../components/all/nav-page";

import ServiceTitle from "../../components/services/serviceTitle";
import Container from "../../components/shared/composers/container";
import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import MotionLeft from "../../components/shared/composers/motion-CardLeft";
import ServiceCardV2 from "../../components/shared/composers/ListriV2/serviceCardV2";
import SliderServices from "../../components/services/SliderServices";
import SubtitleV2 from "../../components/shared/composers/ListriV2/subtitleV2";
import CallToAction from "../../components/services/servicesDetail/callToAction";
import ServicePageCard from "../../components/services/servicePageCard";
const Services = () => {
  const [data, setData] = useState({ name: "" });
  const services1 = [
    {
      title: "Création de site web",
      subtitle: "Rapide et sur mesure",

      linkText: "Découvrir",
      href: "/services/website",
      imgSrc: "/assets/logoV2/Website-creator.svg",
      blueBg: false,
    },
    {
      title: "Référencement",
      subtitle:
        "This holiday season, find the perfect gift for everyone on your list.",

      linkText: "Découvrir",
      href: "services/Optimisation-Web",
      imgSrc: "/assets/logoV2/social-dashboard.svg",
      blueBg: true,
      ancre: "Marketing",
    },
  ];
  const services2 = [
    {
      title: "Marketing digital",
      subtitle: "Rapide et sur mesure",

      linkText: "Découvrir",
      href: "/services/website",
      imgSrc: "/assets/logoV2/Website-creator.svg",
      blueBg: false,
    },
    {
      title: "Optimisation Digital",
      subtitle:
        "This holiday season, find the perfect gift for everyone on your list.",

      linkText: "Découvrir",
      href: "/services/referencement",
      imgSrc: "/assets/logoV2/digital-card.svg",
      blueBg: true,
    },
    {
      title: "Digital Card",
      subtitle:
        "This holiday season, find the perfect gift for everyone on your list.",

      linkText: "Découvrir",
      href: "services/Optimisation-Web",
      imgSrc: "/assets/logoV2/social-dashboard.svg",
      blueBg: false,
    },
  ];
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
      <main className='bg-white pt-28  text-default '>
        <Container className='mx-[25px]'>
          <div className='mb-[40px] space-y-[36px]'>
            <ServiceTitle
              subtitle1={"Services."}
              subtitle2={
                "Du site web au marketing recevez le service que vous aimez "
              }
            />
            <SliderServices />{" "}
          </div>
          {services1.map((service, i) => {
            return (
              <ServicePageCard
                key={i}
                title={service.title}
                subtitle={service.subtitle}
                linkText={service.linkText}
                href={service.href}
                imgSrc={service.imgSrc}
                blueBg={service.blueBg}
                CTA={service.CTA}
                ancre={service.ancre}
              />
            );
          })}
          <div className='my-[40px]'>
            <CallToAction />
          </div>

          {services2.map((service, i) => {
            return (
              <ServiceCardV2
                key={i}
                title={service.title}
                subtitle={service.subtitle}
                linkText={service.linkText}
                href={service.href}
                imgSrc={service.imgSrc}
                blueBg={service.blueBg}
                CTA={service.CTA}
                ancre={service.ancre}
              />
            );
          })}
        </Container>
      </main>
    </NavPage>
  );
};
export default Services;
{
  /* <div className='absolute inset-0 flex items-center justify-center'></div>
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
        </Container> */
}
