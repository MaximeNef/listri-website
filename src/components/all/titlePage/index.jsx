import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const TitlePage = ({ title, subtitle, description }) => {
  return (
    <Container className=''>
      {" "}
      <Flex
        type='col'
        align='start'
        className=' space-y-4 mb-20 mx-10 md:mx-[60px]'
      >
        <h1 className=' text-center font-medium text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {title}
        </h1>
        <Container className='font-semibold text-[#37474F]'>
          {" "}
          {subtitle}
        </Container>
        <Container className='text-center font-light text-[#37474F]'>
          {description}
        </Container>
      </Flex>
    </Container>
  );
};
export default TitlePage;
