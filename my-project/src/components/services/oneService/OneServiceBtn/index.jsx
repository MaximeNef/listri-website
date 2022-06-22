import Container from "../../../shared/composers/container";

const OneServiceBtn = () => {
  return (
    <Container className='mx-auto  bg-[#FFFAF5] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-full  p-[1px]'>
      <Container className='  rounded-full  bg-[#FFFAF5]   '>
        <Container className='mx-auto font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-full px-5 py-2'>
          {"Parlez nous de votre projet"}
        </Container>
      </Container>
    </Container>
  );
};
export default OneServiceBtn;
