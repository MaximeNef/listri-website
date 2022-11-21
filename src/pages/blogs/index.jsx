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
import Cardblog from "../../components/blog/CardBlog";
import FilterBlog from "../../components/blog/filterBlog";
import { useState } from "react";

const Blogs = ({ blogs, BlogTitle }) => {
  const [filterValue, setFilterValue] = useState("all");
  const [newProductList, setNewProductList] = useState(blogs);
  console.log(blogs, "blogs");

  const titlepageprops = {
    title: " L’actualité & les ressources ",
    subtitle: "",
    description:
      "Tout ce qu’il vous faut pour découvrir et comprendre le monde du digital 3.0 Restez à jour avec listri",
  };
  function onFilterValueSelected(filterValue) {
    console.log(filterValue);
    setFilterValue(filterValue);
  }
  const filteredProductList = newProductList.filter((blog) => {
    if (filterValue === "all") {
      return blog;
    }
    if (filterValue === blog?.data.slices[0].items[0].category) {
      return blog;
    }
  });

  return (
    <NavPage current='Blog'>
      <Head>
        <title>découvrez tous nos articles sur les dernieres actualité</title>
        <meta
          name='description'
          content='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience.'
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-white  pt-28 '>
        <Container className='mb-10 mx-auto md:max-w-[1600px] '>
          <TitlePage
            title={titlepageprops.title}
            subtitle={titlepageprops.subtitle}
            description={titlepageprops.description}
          />
          <FilterBlog filterValueSelected={onFilterValueSelected} />
          <Flex type='row' justify='center' className=' md:mx-10  '>
            <ul className='md:flex md:flex-row md:flex-wrap md:justify-center'>
              {filteredProductList.map((blog, i) => (
                <li
                  key={blog.uid}
                  className={`${
                    i == 0
                      ? "md:flex md:flex-row md:flex-wrap md:w-[100%]"
                      : "md:flex md:flex-row md:flex-wrap md:w-[33%]"
                  }`}
                >
                  <Link href={`/blogs/${blog.uid}`} key={blog.uid} passHref>
                    <a key={blog.uid}>
                      <Cardblog
                        i={i}
                        src={blog.data.slices[0].items[0].image.url}
                        timing={blog.data.slices[0].items[0].timing[0].text}
                        category={blog.data.slices[0].items[0].category}
                        title={blog.data.slices[0].items[0].title[0].text}
                        subtitle={
                          blog.data.slices[0].items[0].description[0].text
                        }
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>{" "}
          </Flex>
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
