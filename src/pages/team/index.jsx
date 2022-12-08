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
    {
      lastName: "Félicien",
      firstName: "De Hertogh",
      activite: "Developpeur web",
      src: "/assets/logo/felicien.jpg",
    },
  ]);
  return (
    <NavPage current='Team'>
      <Head>
        <title>
          Vos spécialistes dans la création de site web & marketing digital
        </title>
        <meta
          name='description'
          content="Plus qu'une agence, Listri vous accompagne dans la digitalisation grâce à ses experts passionnés de leurs domaines pour vous obtenir les meilleurs résultats"
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

      <main className='bg-white pt-28  text-[#37474F]'>
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
