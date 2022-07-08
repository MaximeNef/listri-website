import Container from "../../shared/composers/container";

const ProgressBar = ({ step, total }) => {
  return (
    <Container className='mx-5 rounded-full md:w-[600px] md:mx-auto'>
      <Container className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-sm mb-1 ml-1'>
        {`Etape ${step}/4`}
      </Container>
      <Container className='bg-[#F9CCA6]  h-[10px] rounded-full'>
        <Container
          style={{ width: (step / total) * 100 + "%" }}
          className=' rounded-full h-[10px] bg-gradient-to-r from-[#FF7E00]  to-[#FF7E00]/50'
        />
      </Container>
    </Container>
  );
};
export default ProgressBar;
