import { useState } from "react";
import Optionform from "../../components/contact/optionform";
import Flex from "../../components/shared/composers/flex";

import Head from "next/head";
import Container from "../../components/shared/composers/container";
import NavPage from "../../components/all/nav-page";
import ContactTitle from "../../components/contact/contactTitle";
import { useRouter } from "next/router";

export default function Contactus() {
  // router
  const router = useRouter();
  // btn options  contact
  const [contenu, setContenu] = useState(false);
  const [media, setMedia] = useState(false);
  const [site, setSite] = useState(false);
  const [referencement, setReferencement] = useState(false);
  const [optimisation, setOptimisation] = useState(false);
  const [autres, setAutres] = useState(true);

  // formulaire contact
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleClick = (value) => () => {
    if (value == "contenu") {
      setContenu((prevState) => !prevState);
      setMedia(false);
      setSite(false);
      setReferencement(false);
      setOptimisation(false);
      setAutres(false);
    }
    if (value == "media") {
      setMedia((prevState) => !prevState);
      setContenu(false);
      setSite(false);
      setReferencement(false);
      setOptimisation(false);
      setAutres(false);
    }
    if (value == "site") {
      setSite((prevState) => !prevState);
      setContenu(false);
      setMedia(false);
      setReferencement(false);
      setOptimisation(false);
      setAutres(false);
    }
    if (value == "referencement") {
      setReferencement((prevState) => !prevState);
      setContenu(false);
      setMedia(false);
      setSite(false);
      setOptimisation(false);
      setAutres(false);
    }
    if (value == "optimisation") {
      setOptimisation((prevState) => !prevState);
      setContenu(false);
      setMedia(false);
      setSite(false);
      setReferencement(false);
      setAutres(false);
    }
    if (value == "autres") {
      setAutres((prevState) => !prevState);
      setOptimisation(false);
      setContenu(false);
      setMedia(false);
      setSite(false);
      setReferencement(false);
    }
  };

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
        contenu: contenu,
        media: media,
        site: site,
        referencement: referencement,
        optimisation: optimisation,
        autres: autres,
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
    console.log(
      nom,
      prenom,
      mail,
      telephone,
      contenu,
      media,
      site,
      referencement,
      optimisation,
      autres
    );
    router.push("/");
  };
  return (
    <NavPage current='contactTest'>
      <Head>
        <title>
          Contactez-nous - Agence digitale dédiée aux entrepreneurs et PME
        </title>
        <meta
          name='description'
          content='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <script>
          UST_CT = []; UST ={" "}
          {{
            s: Date.now(),
            addTag: function (tag) {
              UST_CT.push(tag);
            },
          }}
          ;UST.addEvent = UST.addTag;
        </script>
        <script
          src='https://stats.listri.digital/server/ust.min.js?v=3.5.3'
          async
        ></script>
      </Head>

      <Container className='md:flex md:flex-col mb-20 md:mb-10 md:w-[60%] mx-auto bg-white pt-[90px] '>
        {" "}
        <Container className='md:w-full '>
          <ContactTitle />
          <p className=' mx-auto'> {"Vous souhaitez nous contacter pour"}</p>
          <Flex justify='between'>
            <Optionform
              state={contenu}
              handleClick={handleClick("contenu")}
              name={"Création de contenu"}
            />
          </Flex>{" "}
          <Flex justify='betwwen'>
            <Optionform
              state={media}
              handleClick={handleClick("media")}
              name={"Social média"}
            />
          </Flex>
          <Flex justify='betwwen'>
            <Optionform
              state={site}
              handleClick={handleClick("site")}
              name={"site web"}
            />
          </Flex>{" "}
          <Flex justify='betwwen'>
            <Optionform
              state={referencement}
              handleClick={handleClick("referencement")}
              name={"Référencement web"}
            />{" "}
          </Flex>
          <Flex>
            <Optionform
              state={optimisation}
              handleClick={handleClick("optimisation")}
              name={"Optimisation Web"}
            />
          </Flex>{" "}
          <Flex>
            <Optionform
              state={autres}
              handleClick={handleClick("autres")}
              name={"Autres"}
            />
          </Flex>{" "}
        </Container>{" "}
        <Flex className='flex-wrap md:w-full md:flex-col'>
          <p className=' mt-[40px]   mx-auto'>{"Complétez vos informations"}</p>

          <form onSubmit={handleSubmit} method='post' className='space-y-3'>
            <input
              type='text'
              name='nom'
              placeholder={`${nom == "" ? "Nom " : "Nom"}`}
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              className='w-[45%] md:w-[48%] h-[60px] border-[#FF7E00] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none '
            />
            <input
              type='text'
              name='prenom'
              placeholder='Prénom'
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              className='w-[45%] md:w-[48%]  h-[60px] border-[#FF7E00] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />
            <input
              type='email'
              name='mail'
              placeholder='Mail'
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              className='w-[95%] md:w-[98%]  h-[60px] border-[#FF7E00] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />
            <input
              type='number'
              name='telephone'
              placeholder='Téléphone'
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              className='w-[95%] md:w-[98%] h-[60px] border-[#FF7E00] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />{" "}
            <Flex justify='center' className='mt-5 relative'>
              <button
                type='submit'
                className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[10px] w-fit shadow-cardcta absolute  '
              >
                <h3 className='text-white mx-[22px] my-[11px]   text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col  justify-center   '>
                  {"Envoyer "}
                </h3>
              </button>{" "}
            </Flex>
          </form>
        </Flex>
      </Container>
    </NavPage>
  );
}

// export async function getServerSideProps() {
//   console.log(process.env.LISTRI);
//   return {
//     props: {
//       hello: "word",
//     },
//   };
// }
