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
import ServiceTitle from "../../components/services/serviceTitle";
import RealisationLabelSlider from "../../components/realisation/realisationLabelSlider";

const Blogs = ({ blogs, BlogTitle }) => {
  const [filterValue, setFilterValue] = useState("all");
  const [newProductList, setNewProductList] = useState(blogs);
  console.log(blogs[2].data.slices[0].items[0].category, "blogs");

  const [allRealisations, setAllRealisations] = useState(blogs);
  const [filterRealisation, setFilterRealisation] = useState("all");

  function onFilterValueSelected(filterValue) {
    setFilterValue(filterValue);
  }
  const newRealisationList = allRealisations.filter((blog) => {
    if (filterRealisation == "all") {
      return blog;
    }

    if (blog?.data.slices[0].items[0].category == filterRealisation) {
      return blog;
    }
  });

  return (
    <NavPage current='Blog'>
      <Head>
        <title>
          Notre blog - Actualités & astuces digitales pour votre entreprise
        </title>
        <meta
          name='description'
          content='Listri met son expertise a votre service au travers d’astuces et de la découverte des dernières actualités marketing, référencement et création de site web.'
        />
        <meta
          name='keywords'
          content='blogs, articles, contenu, écriture, rédaction, actualités, conseils, astuces, listri digital'
        />
        <meta charset='UTF-8' />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-white  text-default'>
        <Container className='md:mx-[95px]  py-28 mx-[25px]'>
          <ServiceTitle
            subtitle1={"Actualité."}
            subtitle2={"Suivez les dernières tendances digitales."}
          />

          <Container className='mt-[30px] mb-[50px]'>
            <RealisationLabelSlider
              filterRealisation={filterRealisation}
              setFilterRealisation={setFilterRealisation}
            />
          </Container>
          <Flex type='row' justify='center' className='    md:mt-5 '>
            <ul className='md:flex md:flex-row md:flex-wrap md:justify-between'>
              {newRealisationList.map((blog, i) => (
                <li
                  key={blog.uid}
                  className={`${
                    i == 0
                      ? "md:flex md:flex-row md:flex-wrap md:w-[100%]"
                      : "md:flex md:flex-row md:flex-wrap md:w-1/2 lg:w-1/3 "
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
