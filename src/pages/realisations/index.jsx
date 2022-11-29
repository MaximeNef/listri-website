import Head from "next/head";
import NavPage from "../../components/all/nav-page";
import Container from "../../components/shared/composers/container";
import { motion } from "framer-motion";
import MyImage from "../../components/shared/composers/myimage";
import TitlePage from "../../components/all/titlePage";
import ClientList from "../../components/client/clientList";
import { createClient } from "../../../prismicio";
import { useState } from "react";
import FilterClient from "../../components/client/filterClient";

const Realisation = ({ realisations }) => {
  const titlepageprops = {
    title: "Réalisation",
    subtitle: "",
    description:
      "Tout ce qu’il vous faut pour découvrir et comprendre le monde du digital 3.0 Restez à jour avec listri",
  };
  const [filterValue, setFilterValue] = useState("all");
  const [newProductList, setNewProductList] = useState(realisations);

  function onFilterValueSelected(filterValue) {
    console.log(filterValue);
    setFilterValue(filterValue);
  }
  const filteredProductList = newProductList.filter((realisation) => {
    if (filterValue === "all") {
      return realisation;
    }
    if (filterValue === blog?.data.slices[0].items[0].category) {
      return realisation;
    }
  });

  return (
    <NavPage current='Réalisations'>
      <Head>
        <title>Nos réalisations - Nous rendons votre projet unique</title>
        <meta
          name='description'
          content='Listri à pour objectif de vous aider dans votre démarche digitale.'
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-white  py-28 '>
        <Container className='mb-10 mx-auto md:max-w-[1600px] '>
          <TitlePage
            title={titlepageprops.title}
            subtitle={titlepageprops.subtitle}
            description={titlepageprops.description}
          />
          <div className='relative ml-[60px] max-w-[70%]'>
            <FilterClient filterValueSelected={onFilterValueSelected} />
          </div>

          <ClientList realisations={filteredProductList} />
          {/* <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
          <Container className="mx-auto">
            <MyImage source="/assets/logo/Process.svg" w={400} h={500} />
          </Container>
        </motion.div> */}
        </Container>
      </main>
    </NavPage>
  );
};
export default Realisation;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const realisations = await client.getAllByType("realisation-client", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      realisations,
    },
  };
}
