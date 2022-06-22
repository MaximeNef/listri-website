import Link from "next/link";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const ContactHero = ({ handleClick, handleClick2, web, marketing }) => {
  return (
    <Container className='my-10 w-full'>
      <Container className='m-auto font-medium text-lg'>
        {"je suis à la recherche d'un service"}
      </Container>

      <Container className='m-auto mt-10 space-y-8 text-center '>
        <Container
          className='  bg-gradient-to-r from-[#FF7E00]  to-[#FF7E00]/50  px-8 py-2 rounded-[20px] text-[#FFFAF5] font-medium '
          onClick={handleClick}
        >
          {"  web "}
        </Container>
        <Container
          className='  bg-gradient-to-r from-[#FF7E00]  to-[#FF7E00]/50  px-8 py-2 rounded-[20px] text-[#FFFAF5] font-medium'
          onClick={handleClick2}
        >
          {" marketing "}
        </Container>
        <Container
          className='  bg-gradient-to-r from-[#FF7E00]  to-[#FF7E00]/50  px-8 py-2 rounded-[20px] text-[#FFFAF5] font-medium'
          onClick={handleClick2}
        >
          {" Autres "}
        </Container>
      </Container>
    </Container>
  );
};
export default ContactHero;
