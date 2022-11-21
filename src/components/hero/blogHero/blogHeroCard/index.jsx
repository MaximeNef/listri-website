import Image from "next/image";
import Link from "next/link";
import Cardblog from "../../../blog/CardBlog";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import MyImage from "../../../shared/composers/myimage";

const BlogHeroCard = ({ blogs }) => {
  return (
    <Container className=''>
      <Flex
        justify='start'
        className='container-snap snap-x mx-auto snap-mandatory h-[400px] flex w-full overflow-scroll   pt-3 pl-2 md:pl-0'
      >
        {blogs.map((blog, i) => {
          return (
            <Link
              href={`/blogs/${blog.uid}`}
              key={blog.uid}
              passHref
              className=' snap-center '
            >
              <Container className=' snap-center flex-shrink-0 w-[90vw] md:w-[800px]'>
                {" "}
                <a key={blog.uid}>
                  <Container
                    className={
                      "md:m-5 mx-1 rounded-[10px] border-[1px] md:border-0"
                    }
                  >
                    <Container>
                      {" "}
                      <MyImage
                        source={`${blog.data.slices[0].items[0].image.url}`}
                        alt='Picture of the author'
                        w={500}
                        h={300}
                        objectFit={"cover"}
                        className=' rounded-t-[10px] md:rounded-[10px] '
                      />
                    </Container>
                    <Container className=' bg-slate-100/30 md:bg-transparent relative'>
                      <Flex className='justify-between m-[10px]'>
                        <Container className='w-[80%] md:w-full'>
                          <p className=' font-light text-[14px] md:text-[18px]'>
                            {blog.data.slices[0].items[0].timing[0].text} min de
                            lecture • {blog.data.slices[0].items[0].category}
                          </p>
                          <h2
                            className={`  font-semibold text-[21px] mt-3 md:w-full h-[100px] md:h-[110px] overflow-hidden  `}
                          >
                            {blog.data.slices[0].items[0].title[0].text}
                          </h2>{" "}
                          <h3 className=' font-[285] text-[14px] w-fit  overflow-hidden  max-h-[40px] mt-2 md:w-[80%]'>
                            {blog.data.slices[0].items[0].description[0].text}
                          </h3>
                        </Container>
                        <Container className='flex justify-end mb-1 p-2 rounded-full bg-[#FEA249] h-fit w-fit absolute bottom-2 right-3 '>
                          <MyImage
                            source='/assets/logo/arrow_right.svg'
                            alt='Picture of the author'
                            w={25}
                            h={25}
                            objectFit={"contain"}
                            className=''
                          />
                        </Container>
                      </Flex>
                    </Container>
                  </Container>
                </a>{" "}
              </Container>
            </Link>
          );
        })}
        {/* <Container className='snap-center bg-[#FFFAF5] w-[220px] flex-shrink-0 h-[220px] flex items-center justify-center shadow-ServiceCard rounded-[20px]'> */}

        {/* </Container> */}

        <Container className='  w-[200px] flex-shrink-0 h-[200px] flex items-center justify-center mx-10  '></Container>
      </Flex>
    </Container>
  );
};
export default BlogHeroCard;
