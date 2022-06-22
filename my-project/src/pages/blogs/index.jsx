import Head from "next/head";
import Link from "next/link";
import NavPage from "../../components/all/nav-page";
import Container from "../../components/shared/composers/container";
import CardBlog from "./[uid]";
import { createClient } from "../../../prismicio";
import Blog from "./[uid]";
import { data } from "autoprefixer";
import { BlogSlices, BlogsTest, TitleBlog } from "../../../slices";
import * as prismicH from "@prismicio/helpers";
import { SliceZone, PrismicText, PrismicRichText } from "@prismicio/react";
import { components } from "../../../slices";
import Flex from "../../components/shared/composers/flex";
import Image from "next/image";
import TitlePage from "../../components/all/titlePage";

const Blogs = ({ blogs, BlogTitle }) => {
  console.log(blogs, "blogs");
  const titlepageprops = {
    title: " Blog",
    subtitle: "L’actualité & les ressources ",
    description:
      "Tout ce qu’il vous faut pour découvrir et comprendre le monde du digital 3.0 Restez à jour avec listri",
  };

  return (
    <NavPage current='Blog'>
      <Head>
        <title>Create Next App</title>
        ;
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />{" "}
      </Head>

      <main className='bg-[#FFFAF5]  pt-28 '>
        <Container className='mb-10'>
          <TitlePage
            title={titlepageprops.title}
            subtitle={titlepageprops.subtitle}
            description={titlepageprops.description}
          />
          <ul>
            {" "}
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.uid}`}>
                <a key={blog.id}>
                  <Flex
                    align='center'
                    justify='between'
                    className='mx-5 bg-[#FFFAF5]  shadow-ServiceCard rounded-[20px]  hover:ease-in hover:duration-300 hover:scale-105 mb-8 text-center hover:shadow-[#FFB873] min-h-[200px]'
                  >
                    <Container className='w-1/3 mr-2 py-4'>
                      <Image
                        src='/assets/logo/blog1.svg'
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className=''
                      />
                    </Container>
                    <Container className=' min-h-[150px] w-[2px]  bg-gradient-to-b from-[#FF7E00] to-[#FFB873]' />
                    <Flex type='col' className='w-2/3  px-2  space-y-4'>
                      <Container className='font-semibold '>
                        {" "}
                        {blog.data.slices[0].items[0].title[0].text}{" "}
                      </Container>
                      <Container className='font-extralight text-sm max-h-[80px] text-ellipsis overflow-hidden'>
                        Dans cet article les bases de l’experience utilisateur
                        aussi appelé UX Dans cet article les bases de
                        {" ... "}
                      </Container>
                      <Container className=' text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] mt-1'>
                        {" "}
                        lire la suite
                      </Container>
                    </Flex>
                  </Flex>
                  {/* <Blog key={blog.id} blog={blog}  /> */}
                </a>
              </Link>
            ))}
          </ul>
        </Container>
      </main>
    </NavPage>
  );
};
export default Blogs;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getAllByType("BlogPost", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      blogs,
    },
  };
}
