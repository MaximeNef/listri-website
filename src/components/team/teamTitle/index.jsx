import Container from "../../shared/composers/container";

const TeamTitle = () => {
  return (
    <Container className=' w-full'>
      <h1 className='mx-auto font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
        {"Team "}
      </h1>
      <Container className='font-semibold text-[#37474F] text-[19px] mx-auto'>
        {" Notre histoire & notre équipe "}
      </Container>
      <Container className='m-6 p-[2px] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] shadow-realisationCard'>
        <Container className='text-center font-light text-[#37474F] text-[17px] p-4 bg-[#FFFFFF] rounded-[18px] leading-8'>
          <p>
            {
              "Listri, une jeune agence digitale familiale spécialisée dans la création de site web & dans le marketing digitale. Créée par deux frères. Maxime, spécialisé dans la programmation, l’UX & l’UI design et Julien spécialisé dans le marketing digital & les réseaux sociaux. Qui ont décidé de mettre en commun leurs talents et leurs passions. Suite à l’obtention de leurs diplômes et de leurs diverses expériences dans le monde du travail, les deux frères se sont rendu compte que très peu d’agences digitales se focalisent sur les TPE & PME. C’est pour cela que Listri a vu le jour; dans le but d’offrir les services d’une grande agence aux petites entreprises."
            }
          </p>
        </Container>
      </Container>
    </Container>
  );
};
export default TeamTitle;
