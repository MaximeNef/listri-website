import { useState } from "react";
import Optionform from "../../components/contact/optionform";
import Flex from "../../components/shared/composers/flex";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "../../components/shared/composers/container";
import NavPage from "../../components/all/nav-page";

export default function ContactTest() {
  // router
  const router = useRouter();
  // btn options  contact
  const [vendre, setVendre] = useState(true);
  const [louer, setLouer] = useState(false);
  const [acheter, setAcheter] = useState(false);
  const [expertise, setExpertise] = useState(false);
  const [estimation, setEstimation] = useState(false);

  // formulaire contact
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleClick = (value) => () => {
    if (value == "vendre") {
      setVendre((prevState) => !prevState);
      setLouer(false);
      setAcheter(false);
      setExpertise(false);
      setEstimation(false);
    }
    if (value == "louer") {
      setLouer((prevState) => !prevState);
      setVendre(false);
      setAcheter(false);
      setExpertise(false);
      setEstimation(false);
    }
    if (value == "acheter") {
      setAcheter((prevState) => !prevState);
      setVendre(false);
      setLouer(false);
      setExpertise(false);
      setEstimation(false);
    }
    if (value == "expertise") {
      setExpertise((prevState) => !prevState);
      setVendre(false);
      setLouer(false);
      setAcheter(false);
      setEstimation(false);
    }
    if (value == "estimation") {
      setEstimation((prevState) => !prevState);
      setVendre(false);
      setLouer(false);
      setAcheter(false);
      setExpertise(false);
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
        vendre: vendre,
        louer: louer,
        acheter: acheter,
        expertise: expertise,
        estimation: estimation,
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
      vendre,
      louer,
      acheter,
      expertise,
      estimation
    );
    router.push("/");
  };
  return (
    <NavPage current='contactTest'>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <h1 className='mb-[40px]'>{"Nous contacter"}</h1>
      <Container className='md:flex md:flex-col mb-10'>
        <Container className='md:w-full'>
          <p className='mb-[20px]'> {"Vous souhaitez nous contacter pour"}</p>
          <Flex justify='between'>
            <Optionform
              state={vendre}
              handleClick={handleClick("vendre")}
              name={"Vendre"}
            />
            <Optionform
              state={louer}
              handleClick={handleClick("louer")}
              name={"Louer"}
            />
          </Flex>
          <Flex justify='betwwen'>
            <Optionform
              state={acheter}
              handleClick={handleClick("acheter")}
              name={"Acheter"}
            />
            <Optionform
              state={expertise}
              handleClick={handleClick("expertise")}
              name={"Expertise"}
            />{" "}
          </Flex>
          <Flex>
            <Optionform
              state={estimation}
              handleClick={handleClick("estimation")}
              name={"Estimation gratuite"}
            />
          </Flex>{" "}
        </Container>{" "}
        <Flex className='flex-wrap md:w-full md:flex-col'>
          <p className=' mt-[40px] mb-[20px]  mx-auto'>
            {"Complétez vos informations"}
          </p>

          <form onSubmit={handleSubmit} method='post' className='space-y-3'>
            <input
              type='text'
              name='nom'
              placeholder={`${nom == "" ? "Nom " : "Nom"}`}
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              className='w-[45%] md:w-[48%] h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none '
            />
            <input
              type='text'
              name='prenom'
              placeholder='Prénom'
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              className='w-[45%] md:w-[49%]  h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />
            <input
              type='email'
              name='mail'
              placeholder='Mail'
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              className='w-[95%] md:w-[98%]  h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />
            <input
              type='number'
              name='telephone'
              placeholder='Téléphone'
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              className='w-[95%] md:w-[98%] h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />{" "}
            <Flex justify='center' className='mt-5 relative'>
              <button
                type='submit'
                className='bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[10px] w-fit shadow-cardcta absolute  '
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
