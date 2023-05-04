import { useState } from "react";
import Optionform from "../../components/contact/optionform";
import Flex from "../../components/shared/composers/flex";

import Head from "next/head";
import Container from "../../components/shared/composers/container";
import NavPage from "../../components/all/nav-page";
import ContactTitle from "../../components/contact/contactTitle";
import { useRouter } from "next/router";
import ServiceTitle from "../../components/services/serviceTitle";
import SliderServices from "../../components/services/SliderServices";
import SliderContact from "../../components/contact/SliderContact";

export default function Contactus() {
  // router
  const router = useRouter();
  // slider options  contact
  const [filterRealisation, setFilterRealisation] = useState("all");
  console.log(filterRealisation);

  // formulaire contact
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nom == "") {
      console.log(error);
      return;
    }
    if (prenom == "") {
      console.log(error);
      return;
    }
    if (mail == "") {
      console.log(error);
      return;
    }
    if (telephone == "") {
      console.log(error);
      return;
    }

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        mail: mail,
        telephone: telephone,
        services: filterRealisation,
        messages: messages,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      console.log(error, "fuck");
      return;
    }
    console.log(nom, prenom, mail, telephone, filterRealisation, messages);
    router.push("/submit-contact");
  };
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
        <Container className='md:mx-[95px] pt-28 mx-[25px]'>
          <ServiceTitle
            subtitle1={"Demande de contact"}
            subtitle2={"sélectionnez votre service"}
          />
          {/* slider  */}
          <div className='my-10'>
            <SliderContact
              filterRealisation={filterRealisation}
              setFilterRealisation={setFilterRealisation}
            />
          </div>
          {/* formulaire */}
          <ServiceTitle subtitle1={"Contactez-moi ici ..."} />
          <form onSubmit={handleSubmit} method='post' className='space-y-3'>
            <input
              type='text'
              name='nom'
              placeholder={`${nom == "" ? "Nom " : "Nom"}`}
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              className='w-[45%] md:w-[48%]   border-b-default border-b-2 rounded-none m-2  py-[15px] text-[19px] font-normal leading-6  placeholder-darkBlue/60 focus:outline-none '
            />
            <input
              type='text'
              name='prenom'
              placeholder='Prénom'
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              className='w-[45%] md:w-[48%]   border-b-default border-b-2 rounded-none m-2  py-[15px] text-[19px] font-normal leading-6  placeholder-darkBlue/60 outline-0	focus:outline-none'
            />
            <input
              type='email'
              name='mail'
              placeholder='Mail'
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              className='w-[95%] md:w-[98%]  border-b-default border-b-2 rounded-none m-2  py-[15px] text-[19px] font-normal leading-6  placeholder-darkBlue/60  outline-0	focus:outline-none'
            />
            <input
              type='number'
              name='telephone'
              placeholder='Téléphone'
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              className='w-[95%] md:w-[98%] h-[60px]  border-b-default border-b-2 rounded-none m-2  py-[15px] text-[19px] font-normal leading-6  placeholder-darkBlue/60  outline-0	focus:outline-none'
            />{" "}
            <textarea
              type='text'
              name='messages'
              placeholder='votre message / question'
              value={messages}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
              className='w-[95%] md:w-[98%] h-[120px]  border-b-default border-b-2 rounded-none m-2  py-[15px] text-[19px] font-normal leading-6  placeholder-darkBlue/60  outline-0	focus:outline-none'
            />{" "}
            <Flex justify='center' className='mt-5 relative '>
              <button
                type='submit'
                className='bg-gradient-to-r via-orangeLight from-rougeLight to-saumon rounded-[10px] w-fit shadow-cardcta absolute  '
              >
                <h3 className='text-white mx-[22px] my-[11px]   text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col  justify-center   '>
                  {"Envoyer "}
                </h3>
              </button>{" "}
            </Flex>
          </form>
        </Container>
      </main>
    </NavPage>
  );
}
