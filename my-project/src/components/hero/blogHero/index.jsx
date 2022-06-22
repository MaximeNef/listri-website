import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import BlogHeroCard from "./BlogHeroCard";
import BlogHeroDescription from "./BlogHeroDescription";
import BlogHeroEnd from "./blogHeroEnd";

const BlogHero = () => {
  return (
    <Container>
      <BlogHeroDescription />
      <BlogHeroCard />
      <BlogHeroEnd />
    </Container>
  );
};
export default BlogHero;
