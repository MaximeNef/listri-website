import Container from "../../../shared/composers/container";

const TitleServiceDetail = ({ title, title2 }) => {
  return (
    <Container className='text-[48px] mx-auto pb-1  font-bold text-center leading-[50px] tracking-[0.23px] text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon w-fit'>
      {title}
      <p>{title2}</p>
    </Container>
  );
};
export default TitleServiceDetail;
