import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import BlogHeroBtn from "../blogHeroBtn";

const BlogHeroEnd = () => {
  return (
    <Container className='w-full mt-[-50px]'>
      <Container className=' mx-auto mt-24 '>
        {" "}
        <BlogHeroBtn />
      </Container>
    </Container>
  );
};
export default BlogHeroEnd;
