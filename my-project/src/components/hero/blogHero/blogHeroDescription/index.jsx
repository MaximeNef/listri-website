import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const BlogHeroDescription = () => {
  return (
    <Container className='mb-8'>
      {" "}
      <Flex type='col' align='center' className=' space-y-4 mb-8 m-10'>
        <h2 className=' font-medium text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
          {"Blogs "}
        </h2>
        <Container className='font-semibold text-[#37474F]'>
          {" L’actualité & les ressources "}
        </Container>
        <Container className='text-center font-light text-[#37474F]'>
          {
            " Tout ce qu’il vous faut pour découvrir et comprendre le monde du digital 3.0  Restez à jour avec listri "
          }
        </Container>
      </Flex>
    </Container>
  );
};
export default BlogHeroDescription;
