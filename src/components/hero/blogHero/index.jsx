import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import BlogHeroCard from "./blogHeroCard";
import BlogHeroDescription from "./blogHeroDescription";
import BlogHeroEnd from "./blogHeroEnd";

const BlogHero = ({ blogs }) => {
  return (
    <Container className=' mt-8 mb-12'>
      <BlogHeroDescription />
      <BlogHeroCard blogs={blogs} />
      <BlogHeroEnd />
    </Container>
  );
};
export default BlogHero;
