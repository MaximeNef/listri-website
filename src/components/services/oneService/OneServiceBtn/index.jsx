import Container from "../../../shared/composers/container";

const OneServiceBtn = () => {
  return (
    <Container className='mx-auto  bg-[#FFFAF5] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-full  p-[1px] my-6 md:max-w-[500px]'>
      <Container className='  rounded-full  bg-[#FFFAF5]   '>
        <Container className='mx-auto  rounded-full px-5 py-2'>
          <p className='font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"Parlez nous de votre projet"}
          </p>
        </Container>
      </Container>
    </Container>
  );
};
export default OneServiceBtn;
