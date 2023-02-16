import Link from "next/link";
import { useState } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import { useRouter } from "next/router";
const DevisGratis = () => {
  const router = useRouter();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");
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
    if (description == "") {
      console.log(error);
      return;
    }

    const res = await fetch("/api/realisationForm", {
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        mail: mail,
        telephone: description,
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
    console.log(nom, prenom, mail, description);
    router.push("/");
  };
  return (
    <Container className=' md:w-full p-[25px] shadow-clientss rounded-[10px] mt-[40px]'>
      <p className='text-center text-[26px] font-black'>Un devis gratuit ?</p>
      <p className='text-center text-[22px] font-normal mb-[30px]'>
        Remplissez le formulaire et recevez votre devis
      </p>
      <form onSubmit={handleSubmit} method='post' className='w-[100%]'>
        <input
          type='text'
          name='nom'
          placeholder={`Nom et prénom`}
          value={nom}
          onChange={(e) => {
            setNom(e.target.value);
          }}
          className='  border-[#FF7E00]/50 border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none w-full'
        />
        <input
          type='text'
          name='nom'
          placeholder={`Numero de téléphone `}
          value={prenom}
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
          className=' border-[#FF7E00]/50 border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none  w-full'
        />
        <input
          type='text'
          name='nom'
          placeholder={`Adresse email`}
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
          className=' border-[#FF7E00]/50 border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none  w-full'
        />

        <input
          type='text'
          name='nom'
          placeholder={"Decrivez votre projet"}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className=' h-[300px] border-[#FF7E00]/50 border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none pb-[300px]  w-full'
        />

        <Flex className=' items-start space-x-2 ml-2 mt-2'>
          <input
            type='checkbox'
            id='privacy'
            name='privacy'
            className=' checked:bg-[#FF7E00]/50 mt-1'
          />
          <label htmlFor='privacy'>
            Je certifie avoir pris connaissance et accepter les conditions
            relatives à la protection de la Vie Privée.
          </label>
        </Flex>
        <Container className='mx-auto text-center w-full  bg-gradient-to-r from-orangeLight to-saumon rounded-[10px] my-2 py-2 text-white font-bold mt-[30px]  '>
          <button type='submit'>
            <a>Recevoir mon devis</a>
          </button>
        </Container>
      </form>
    </Container>
  );
};
export default DevisGratis;
