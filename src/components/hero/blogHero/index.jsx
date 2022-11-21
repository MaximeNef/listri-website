import Image from "next/image";
import Link from "next/link";
import Cardblog from "../../blog/CardBlog";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import BlogHeroCard from "./blogHeroCard";
import BlogHeroDescription from "./blogHeroDescription";
import BlogHeroEnd from "./blogHeroEnd";

const BlogHero = ({ blogs }) => {
  return (
    <Container className=' mt-8 mb-12'>
      {/* {blogs.map((blog, i) => {
        return (
          <Link href={`/blogs/${blog.uid}`} key={blog.uid} passHref>
            <Container className=''>
              {" "}
              <a key={blog.uid}>
                <Cardblog
                  i={i}
                  src={blog.data.slices[0].items[0].image.url}
                  timing={blog.data.slices[0].items[0].timing[0].text}
                  category={blog.data.slices[0].items[0].category}
                  title={blog.data.slices[0].items[0].title[0].text}
                  subtitle={blog.data.slices[0].items[0].description[0].text}
                />
              </a>{" "}
            </Container>
          </Link>
        );
      })} */}
      <BlogHeroDescription />
      <BlogHeroCard blogs={blogs} />
      <BlogHeroEnd />
    </Container>
  );
};
export default BlogHero;
