import Container from "../../../shared/composers/container";

const TitleServiceDetail = ({ title, title2 }) => {
  return (
    <Container className='text-[48px] md:text-[100px] mx-auto  pb-1  font-bold text-center leading-[50px] md:leading-[80px] tracking-[0.23px] text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon w-fit'>
      <h1>{title}</h1>
      <h1>{title2}</h1>
    </Container>
  );
};
export default TitleServiceDetail;
