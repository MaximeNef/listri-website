import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import MotionBottom from "../../../shared/composers/motion-textBottom";

const BlogHeroDescription = () => {
  return (
    <Container className=''>
      {" "}
      <Flex type='col' align='center' className=' space-y-4 mb-8 m-10'>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2 }}
        >
          <h2 className=' font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"Blog "}
          </h2>
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className='font-semibold text-[#37474F] text-[19px]'>
            {" L’actualité & les ressources "}
          </Container>
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
        >
          <Container className='text-center font-light text-[#37474F] text-[17px] '>
            {
              " Tout ce qu’il vous faut pour découvrir et comprendre le monde du digital 3.0  Restez à jour avec listri "
            }
          </Container>
        </MotionBottom>
      </Flex>
    </Container>
  );
};
export default BlogHeroDescription;
