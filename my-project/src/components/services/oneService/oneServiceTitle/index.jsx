import Container from "../../../shared/composers/container";

const OneServiceTitle = ({ title, description }) => {
  return (
    <Container>
      <Container className='mx-auto font-medium text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] my-6'>
        <h1> {title}</h1>
      </Container>

      <Container className=' shadow-ServiceCard  rounded-[20px] p-[18px] text-center font-light text-sm leading-6'>
        {description}
      </Container>
    </Container>
  );
};
export default OneServiceTitle;
