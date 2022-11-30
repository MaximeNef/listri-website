import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const TitlePage = ({ title, subtitle, description }) => {
  return (
    <Container className=''>
      {" "}
      <Flex
        type='col'
        className=' space-y-4 mb-20 mx-10 md:mx-[60px] items-center md:items-start'
      >
        <h1 className=' text-center font-medium text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {title}
        </h1>
        <Container className='font-semibold text-[#37474F] '>
          {" "}
          {subtitle}
        </Container>
        <Container className=' text-center md:text-left font-light text-[#37474F] md:max-w-[40%] md:leading-9'>
          {description}
        </Container>
      </Flex>
    </Container>
  );
};
export default TitlePage;
