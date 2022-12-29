import Head from "next/head";
import NavPage from "../components/all/nav-page";
import Hero from "../components/hero";
import { createClient } from "../../prismicio";
import ServiceCardV2 from "../components/shared/composers/ListriV2/serviceCardV2";

export default function Home({ articles, blogs }) {
  const services = [
    {
      title: "Référencement",
      subtitle:
        "This holiday season, find the perfect gift for everyone on your list.",

      linkText: "Découvrir",
      href: "/",
      imgSrc: "/assets/logoV2/digital-card.svg",
      blueBg: true,
    },
    {
      title: "Référencement",
      subtitle:
        "This holiday season, find the perfect gift for everyone on your list.",

      linkText: "Découvrir",
      href: "/",
      imgSrc: "/assets/logoV2/digital-card.svg",
      blueBg: false,
    },
    {
      title: "Référencement",
      subtitle:
        "This holiday season, find the perfect gift for everyone on your list.",

      linkText: "Découvrir",
      href: "/",
      imgSrc: "/assets/logoV2/digital-card.svg",
      blueBg: true,
    },
  ];
  return (
    <NavPage current='Accueil'>
      <Head>
        <title>Boostez votre PME avec un site web & du marketing digital</title>
        <meta
          name='description'
          content='🚀 Augmentez votre visibilité avec la création de votre site web sur-mesure ! Contactez notre agence digitale spécialisée en développement web et marketing.'
        />
        <meta
          name='keywords'
          content=' Listri, Agence digitale, Marketing digital, Stratégie marketing, Communication Digitale, Contenu Numérique, Création de site Web, Création de contenu, Gestion réseaux sociaux, SEO, E-commerce, Analyse de Données, Mesure des Performances, Optimisation site web'
        />
        <meta
          name='google-site-verification'
          content='SiiyWySS-E4LEBuJc9YlARLPC0yJzhi4h3vjZZ7rmSk'
        />
        <meta charset='UTF-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='bg-white pt-28  text-default '>
        <Hero />
        <div className='mx-[25px]'>
          {services.map((service, i) => {
            return (
              <ServiceCardV2
                key={i}
                title={service.title}
                subtitle={service.subtitle}
                linkText={service.linkText}
                href={service.href}
                imgSrc={service.imgSrc}
                blueBg={service.blueBg}
              />
            );
          })}
        </div>
        {/* <ServiceHero /> */}
        {/* <ClientHero /> */}
        {/* <Process /> 
        <Processherotry />
        <BlogHero blogs={blogs} /> */}
      </main>
    </NavPage>
  );
}

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
