import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import NavPage from "../../components/all/nav-page";
import Container from "../../components/shared/composers/container";
import TeamCard from "../../components/team/teamCard";
import TeamTitle from "../../components/team/teamTitle";

const Team = () => {
  const [Teams, setTeams] = useState([
    {
      lastName: "Julien",
      firstName: "Nef",
      activite: "Marketing digital & référencement",
      mail: "julien@listri.digital",
      phone: "+32470/68.45.51",
      src: "/assets/logo/avatar.png",
    },
    {
      lastName: "Maxime",
      firstName: "Nef",
      activite: "Developpeur web",
      mail: "maxime@listri.digital",
      phone: "+32472/86.06.28",
      src: "/assets/logo/maxime.png",
    },
  ]);
  return (
    <NavPage current='Team'>
      <Head>
        <title>Listri Agence Digitale - Team </title>
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

      <main className='bg-[#FFFAF5] pt-28  text-[#37474F]'>
        <TeamTitle />
        <Container className='space-y-20  mt-28 md:flex-row md:justify-center md:space-y-0'>
          {Teams.map((team, i) => {
            return <TeamCard team={team} key={i} />;
          })}
        </Container>
      </main>
    </NavPage>
  );
};
export default Team;
