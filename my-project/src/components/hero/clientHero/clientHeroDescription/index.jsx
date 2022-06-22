import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const ClientHeroDescription = () => {
  return (
    <Container className='mb-8'>
      {" "}
      <Flex type='col' align='center' className=' space-y-4 mb-8 m-10'>
        <h2 className=' font-medium text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {"Nos réalisations "}
        </h2>
        <Container className='font-semibold text-[#37474F]'>
          {"  Nous réalisons vos projets ensemble "}
        </Container>
        <Container className='text-center font-light text-[#37474F]'>
          Nous réalisons vos projets ensemble partout ou nous alons. Nous
          réalisons vos projets ensemble partout ou nous alons. Nous réalisons
        </Container>
      </Flex>
    </Container>
  );
};
export default ClientHeroDescription;
