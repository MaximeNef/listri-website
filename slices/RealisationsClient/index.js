import React from "react";
import { PrismicRichText } from "@prismicio/react";
import MyImage from "../../src/components/shared/composers/myimage";
import Container from "../../src/components/shared/composers/container";
import Link from "next/link";
import Flex from "../../src/components/shared/composers/flex";
import DevisGratis from "../../src/components/client/DevisGratis";

const servicesClient = [
  {
    image: "/assets/logo/mockup.svg",
    title: "Un site qui vous appartient",
    description:
      "Oubliez la location de site qui vous coûtera bien trop cher à long terme. Payez pour un site qui vous appartient, sans frais cachés. .",
  },
  {
    image: "/assets/logo/contrat.svg",
    title: "Sans durée de contrat",
    description:
      "Pas d’emprisonnement dans un contrat sur la durée : nous croyons à la fidélité méritée. Notre philosophie est de prendre soin de nos clients.",
  },
  {
    image: "/assets/logo/surMesur.svg",
    title: "Un service sur mesure",
    description:
      "Nous proposons des solutions « clé en main », mais également des services sur mesure afin de s’adapter à toutes les situations.",
  },
];

const RealisationsClient = ({ slices }) => (
  <section className='mx-5 mb-10'>
    <h1 className='font-bold text-[23px] mb-[30px]'>
      {slices[0].primary.client[0]?.text}
    </h1>
    <p className='text-[#FF7E00] font-semibold text-[16px] mb-[10px]'>
      Description du projet
    </p>
    <p> {slices[0].primary.clientDescription[0]?.text}</p>
    <Container className='h-[250px] relative my-[30px]'>
      <MyImage source={slices[0].primary.screenImage?.url} layout={"fill"} />
    </Container>
    <Container
      className='mx-auto text-center w-full border  border-[#FF7E00]
 rounded-[10px] my-2 py-2 text-white font-bold mb-[60px]  '
    >
      <a
        className='text-[#FF7E00] text-[20px] '
        href={slices[0].primary.lienProjet?.url}
      >
        visiter le site{" "}
      </a>
    </Container>
    <p className='text-[#FF7E00] font-semibold text-[16px] mb-5'>
      Ce que nous avons réalisé
    </p>
    <p>{slices[0].primary.realisationDescription[0]?.text}</p>
    <Container className='h-[250px] relative my-[30px] mx-[-20px]'>
      <MyImage source={slices[0].primary.mockupImage?.url} layout={"fill"} />
    </Container>
    <p
      className='text-[#474747
] font-light text-[35px] tracking-wider'
    >
      Ce que dit notre client
    </p>
    <Flex justify='start' className=' mt-[14px]'>
      <p className='text-[#FF7E00] font-light text-[16px] mr-2'>
        <Link
          href={
            "https://www.google.com/search?q=listri+digital&sxsrf=ALiCzsYt_sdzKTeIHmNX7V0XG5pSRvddMw%3A1669381209688&ei=WbyAY7_aKYm5sAfKmYDYAQ&ved=0ahUKEwj_6v3Pscn7AhWJHOwKHcoMABsQ4dUDCA8&uact=5&oq=listri+digital&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIECCMQJzIGCAAQBxAeMggIABAHEB4QDzIICAAQBRAHEB4yCAgAEAUQBxAeMggIABAFEAcQHjIICAAQBRAHEB4yCAgAEAUQBxAeOgcIIxCwAxAnOgkIABAeELADEA06CwgAEAgQHhCwAxANSgQIQRgBSgQIRhgAUJMCWJMCYMoIaAJwAHgAgAE3iAE3kgEBMZgBAKABAcgBA8ABAQ&sclient=gws-wiz-serp"
          }
        >
          <a> Voir tout sur google</a>
        </Link>
      </p>
      <Flex justify='center' className=' items-center space-x-[2px] '>
        <div>5/5</div>
        <div className=' h-[14px] w-[14px] bg-[#FF7E00] rounded-full' />
        <div className=' h-[14px] w-[14px] bg-[#FF7E00] rounded-full' />
        <div className=' h-[14px] w-[14px] bg-[#FF7E00] rounded-full' />
        <div className=' h-[14px] w-[14px] bg-[#FF7E00] rounded-full' />
        <div className=' h-[14px] w-[14px] bg-[#FF7E00] rounded-full' />
      </Flex>
    </Flex>
    <Container className='bg-white p-[25px] shadow-clientss rounded-[10px] mt-[30px]'>
      <p className='mb-[18px]'>“{slices[0].primary.avisClient[0]?.text}”</p>
      <p className='text-[20px] text-[#414040] mb-2'>
        {slices[0].primary.nomClient[0]?.text}
      </p>
      <p className='text-[14px] text-[#BFBFBF]'>
        {" "}
        {slices[0].primary.statutClient[0]?.text}
      </p>
    </Container>
    <Container className='mx-auto text-center w-full  bg-[#FF7E00] rounded-[10px] my-2 py-2 text-white font-bold mt-[40px]  '>
      <Link href='/realisations'>
        <a>Nos réalisations</a>
      </Link>
    </Container>
    <DevisGratis />
    {servicesClient.map((service, i) => {
      return (
        <Container className='text-center mt-[50px]' key={i}>
          <MyImage source={service.image} h={60} w={60} />
          <p className=' text-[22px] font-bold'>{service.title}</p>
          <p className='text-[17px] mt-1'>{service.description}</p>
        </Container>
      );
    })}
    <p className='mt-[49px] text-[30px] font-black tracking-wide'>
      Votre projet débute ici
    </p>
    <p className='text-[22px]'>
      Demandez une offre, et nous vous répondrons aujourd'hui !
    </p>
    <Flex className='space-x-2 mt-[20px]'>
      <Container className='mx-auto text-center w-full  bg-[#FF7E00]  rounded-[10px] my-2 py-2 text-white font-bold  '>
        <Link href='/contactus'>
          <a>demander une offre</a>
        </Link>
      </Container>
      <Container className='mx-auto text-center w-full   border-[2px] border-[#FF7E00] rounded-[10px] my-2 py-2 text-white font-bold '>
        <Link href='/services'>
          <a className='text-[#FF7E00]'>nos services</a>
        </Link>
      </Container>
    </Flex>
  </section>
);

export default RealisationsClient;
