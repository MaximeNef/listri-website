import Container from "../../../shared/composers/container";

const OneServiceBtn = () => {
  return (
    <Container className='mx-auto md:w-fit  bg-[#FFFFFF] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-full  p-[1px] my-6 md:max-w-[500px]  shadow-realisationCard  hover:duration-300 hover:scale-105   '>
      <Container className='  rounded-full  bg-[#FFFFFF]   '>
        <Container className='mx-auto  rounded-full px-6 py-3'>
          <p className='font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"Parlez nous de votre projet"}
          </p>
        </Container>
      </Container>
    </Container>
  );
};
export default OneServiceBtn;
