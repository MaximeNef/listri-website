import Link from "next/link";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const ContactMarket = ({ handleClick7, handleClick8, handleClick9 }) => {
  return (
    <Container className='my-10 w-full '>
      <Container className='m-auto font-medium text-lg'>
        {"Je souhaite plus d’information sur"}
      </Container>

      <Container className='m-auto mt-6 space-y-8 text-center w-full  px-5 md:w-[450px]'>
        <Container
          className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[20px] shadow-realisationCard '
          onClick={handleClick7}
        >
          <Container className=' text-lg bg-[#FFFAF5] text-center font-light rounded-[19px] w-full h-16 items-center justify-center '>
            <Container className=''>
              <p className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {" Social média"}
              </p>
            </Container>
          </Container>
        </Container>

        <Container
          className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[20px] shadow-realisationCard '
          onClick={handleClick8}
        >
          <Container className='text-lg  bg-[#FFFAF5] text-center font-light rounded-[19px] w-full h-16 items-center justify-center'>
            <Container className=''>
              <p className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {" Référencement "}
              </p>
            </Container>
          </Container>
        </Container>
        <Container
          className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[20px] shadow-realisationCard '
          onClick={handleClick9}
        >
          <Container className=' text-lg bg-[#FFFAF5] text-center font-light rounded-[19px] w-full h-16 items-center justify-center '>
            <Container className=''>
              <p className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                {"Création de contenu"}
              </p>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default ContactMarket;
