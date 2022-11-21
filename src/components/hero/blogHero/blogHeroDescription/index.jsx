import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import MotionBottom from "../../../shared/composers/motion-textBottom";

const BlogHeroDescription = () => {
  return (
    <Container className=''>
      {" "}
      <Container className='mx-6 mb-5 mt-12'>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2 }}
        >
          <h2 className='  font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"Blog"}
          </h2>
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className=' text-[21px] font-light mt-3 '>
            {" L’actualité & les ressources"}
          </Container>
        </MotionBottom>
      </Container>
    </Container>
  );
};
export default BlogHeroDescription;
