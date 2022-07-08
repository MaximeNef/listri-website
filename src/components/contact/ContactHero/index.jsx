import Link from "next/link";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const ContactHero = ({ handleClick, handleClick2, handleClick3 }) => {
  return (
    <Container className='my-10 w-full '>
      <Container className='m-auto font-medium text-lg'>
        {"je suis à la recherche d'un service"}
      </Container>

      <Container className='m-auto mt-6 space-y-8 text-center w-full  px-5 md:w-[450px]'>
        <Container
          className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[20px] shadow-realisationCard md:w-full md:h-full '
          onClick={handleClick}
        >
          <Container className=' bg-[#FFFAF5] text-center font-light rounded-[19px] w-full h-16 items-center justify-center '>
            <Container className=''>
              <p className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {" web"}
              </p>{" "}
            </Container>
          </Container>
        </Container>

        <Container
          className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[20px] shadow-realisationCard md:w-full md:h-full '
          onClick={handleClick2}
        >
          <Container className=' bg-[#FFFAF5] text-center font-light rounded-[19px] w-full h-16 items-center justify-center '>
            <Container className=' '>
              <p className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {" Marketing"}
              </p>{" "}
            </Container>
          </Container>
        </Container>

        <Container
          className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[20px] shadow-realisationCard md:w-full md:h-full '
          onClick={handleClick3}
        >
          <Container className=' bg-[#FFFAF5] text-center font-light rounded-[19px] w-full h-16 items-center justify-center '>
            <Container className=''>
              <p className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {" Autres"}
              </p>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default ContactHero;
