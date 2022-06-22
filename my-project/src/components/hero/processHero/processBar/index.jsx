import Container from "../../../shared/composers/container";

const ProcessBar = () => {
  return (
    <Container className='mx-6 mb-5 '>
      <Container className='  font-medium text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] '>
        {"Do more with Listri"}
      </Container>
      <Container className='mx-auto text-[24px] font-light '>
        {"here's where the process begins."}
      </Container>
    </Container>
  );
};
export default ProcessBar;
