import Link from "next/link";
import { useState } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const DevisGratis = () => {
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

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        mail: mail,
        telephone: description,
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
      description,
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
          value={nom}
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
          className=' border-[#FF7E00]/50 border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none  w-full'
        />
        <input
          type='text'
          name='nom'
          placeholder={`Adresse email`}
          value={nom}
          onChange={(e) => {
            setMail(e.target.value);
          }}
          className=' border-[#FF7E00]/50 border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none  w-full'
        />

        <input
          type='text'
          name='nom'
          placeholder={"Decrivez votre projet"}
          value={nom}
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
        <Container className='mx-auto text-center w-full  bg-[#FF7E00] rounded-[10px] my-2 py-2 text-white font-bold mt-[30px]  '>
          <Link href='/realisations'>
            <a>Recevoir mon devis</a>
          </Link>
        </Container>
      </form>
    </Container>
  );
};
export default DevisGratis;
