import Container from "../../../shared/composers/container";
import MotionBottom from "../../../shared/composers/motion-textBottom";

const ProcessBar = () => {
  return (
    <Container className='mx-6 mb-5 '>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.2 }}
      >
        <h2 className=' leading-[48px] font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {"Faites en plus "}
        </h2>
      </MotionBottom>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5 }}
      >
        <Container className=' text-[21px] font-light mt-3 '>
          {"le processus commence ici "}
        </Container>
      </MotionBottom>
    </Container>
  );
};
export default ProcessBar;
