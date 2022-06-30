import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const ContactTitle = ({ title }) => {
  return (
    <Container className=''>
      {" "}
      <Flex type='col' align='center' className=' space-y-4 mb-8 mx-10'>
        <h2 className=' font-medium text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {"Contact "}
        </h2>
        <Container className='font-semibold text-[#37474F]'>
          {"  Parlez-nous de vous "}
        </Container>
        <Container className='text-center font-light text-[#37474F]'>
          {
            " Complétez au mieux ces champs pour que nous puissions vous aider de façon la plus précise possible."
          }
        </Container>
      </Flex>
    </Container>
  );
};
export default ContactTitle;
