import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MotionBottom from "../../shared/composers/motion-textBottom";

const ServiceTitle = ({ title }) => {
  return (
    <Container className=''>
      {" "}
      <Flex type='col' align='center' className=' space-y-4 mb-8 mx-10'>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2 }}
        >
          <h2 className=' font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"Nos services "}
          </h2>{" "}
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className='font-semibold text-[#37474F] text-[19px] text-center'>
            {" Nous réalisons vos projets ensemble "}
          </Container>
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className='text-center font-light text-[#37474F] text-[17px]'>
            {
              " Nous réalisons vos projets ensemble partout ou nous alons. Nous réalisons vos projets ensemble partout ou nous alons. Nous réalisons"
            }
          </Container>
        </MotionBottom>
      </Flex>
    </Container>
  );
};
export default ServiceTitle;
