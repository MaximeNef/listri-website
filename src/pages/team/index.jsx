import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import NavPage from "../../components/all/nav-page";
import ServiceTitle from "../../components/services/serviceTitle";
import Container from "../../components/shared/composers/container";
import TeamCard from "../../components/team/teamCard";
import TeamTitle from "../../components/team/teamTitle";

const Team = () => {
  const [Teams, setTeams] = useState([
    {
      lastName: "Julien",
      firstName: "Nef",
      poste: "Co-founder",
      activite: "Marketing digital & référencement",

      src: "/assets/logo/avatar.png",
    },
    {
      lastName: "Maxime",
      firstName: "Nef",
      poste: "Co-founder",
      activite: "Developpeur web",
      src: "/assets/logo/maxime.png",
    },
    {
      lastName: "Nolwenn",
      firstName: "Heurtin",
      poste: "stagiaire",
      activite: "Developpeuse web",
      src: "/assets/logo/nh.jpg",
    },
  ]);
  return (
    <NavPage current='Equipe'>
      <Head>
        <title>
          Vos spécialistes dans la création de site web & marketing digital
        </title>
        <meta
          name='description'
          content="Plus qu'une agence, Listri vous accompagne dans la digitalisation grâce à ses experts passionnés de leurs domaines pour vous obtenir les meilleurs résultats"
        />
        <meta
          name='keywords'
          content='équipe, membres, notre équipe, la team, expertises, listri digital, experts digital, nos experts, collaborateurs, équipe d’experts'
        />
        <meta charset='UTF-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />{" "}
      </Head>
      <main className='bg-white  text-default '>
        <Container className='md:mx-[95px] py-28 mx-[25px]'>
          <ServiceTitle
            subtitle1={"Notre équipe"}
            subtitle2={"d'experts qui gère tous vos services."}
          />
          <Container className='space-y-[25px]  md:justify-center mt-10 md:flex-row flex-wrap  md:space-y-0 '>
            {Teams.map((team, i) => {
              return <TeamCard team={team} key={i} />;
            })}
          </Container>
        </Container>
      </main>
    </NavPage>
  );
};
export default Team;
