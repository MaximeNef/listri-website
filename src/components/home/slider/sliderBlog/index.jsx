import Link from "next/link";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import SliderBlogCard from "./sliderBlogCard";

const SliderBlog = ({ blogs }) => {
  return (
    <Flex className='snap-mandatory snap-x overflow-scroll mx-[-25px] pl-2 mb-5'>
      <Container className={"min-w-[25px]"} />
      {blogs.map((blog) => {
        return (
          <Link href={`/blogs/${blog.uid}`} key={blog.uid}>
            <a key={blog.uid}>
              <SliderBlogCard
                source={`${blog.data.slices[0].items[0].image.url}`}
                timing={blog.data.slices[0].items[0].timing[0].text}
                category={blog.data.slices[0].items[0].category}
                title={blog.data.slices[0].items[0].title[0].text}
              />
            </a>
          </Link>
        );
      })}
      <Container className={"min-w-[20px]"} />
    </Flex>
  );
};

export default SliderBlog;
