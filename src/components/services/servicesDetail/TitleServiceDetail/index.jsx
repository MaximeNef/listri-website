import Container from "../../../shared/composers/container";

const TitleServiceDetail = ({ title }) => {
  return (
    <Container className='text-[48px]  font-bold text-center leading-[50px] tracking-[0.23px] text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon '>
      {title}
    </Container>
  );
};
export default TitleServiceDetail;
