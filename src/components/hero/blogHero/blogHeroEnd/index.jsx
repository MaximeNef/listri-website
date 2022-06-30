import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import BlogHeroBtn from "../blogHeroBtn";

const BlogHeroEnd = () => {
  return (
    <Container className='w-full'>
      <Container className=' mx-auto mt-10'>
        {" "}
        <BlogHeroBtn />
      </Container>
    </Container>
  );
};
export default BlogHeroEnd;
