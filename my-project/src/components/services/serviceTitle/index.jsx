import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const ServiceTitle = ({ title }) => {
  return (
    <Container className=''>
      {" "}
      <Flex type='col' align='center' className=' space-y-4 mb-8 mx-10'>
        <h2 className=' font-medium text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {"Nos services "}
        </h2>
        <Container className='font-semibold text-[#37474F]'>
          {" "}
          Nous réalisons vos projets ensemble{" "}
        </Container>
        <Container className='text-center font-light text-[#37474F]'>
          Nous réalisons vos projets ensemble partout ou nous alons. Nous
          réalisons vos projets ensemble partout ou nous alons. Nous réalisons
        </Container>
      </Flex>
    </Container>
  );
};
export default ServiceTitle;
