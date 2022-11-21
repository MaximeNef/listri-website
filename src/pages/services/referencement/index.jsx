import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";

const Referencement = () => {
  return (
    <NavPage current='Services'>
      <Head>
        <title>
          Agence N°1 - Référencement naturel, SEO, SEA de votre site web
        </title>
        <meta
          name={"description"}
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
      <Container className='py-20 bg-white px-5'>
        <Container className='md:flex md:flex-row  md:items-center'>
          <OneServiceTitle
            title={"Référencement Web"}
            description={
              "Il est primordial pour votre entreprise de se retrouver sur les moteurs de recherche pour permettre à vos clients de vous retrouver facilement. Hélas la concurrence est rude, c’est pour cela que nous vous accompagnons de le référencement de votre site web. SEO, SEA, SMO, SMA "
            }
          />
          <OneServiceImg src={"/assets/logo/seodashboard.svg"} />
        </Container>

        <OneServiceContent
          Contents={[
            {
              title: "Référencements SEO & SEA",
              src: "/assets/logo/Advertising.svg",
              text: "Il y à plusieures façons de référencer son site web sur internet. La première est le SEO (Search Engine Optimisation) il permet d’optimiser les données se trouvant sur votre site pour qu’il réponde exactement aux recherches éffectuées sur les moteurs de recherche par vos clients. Le SEA (Search Engine Advertising) est la façon payante de se référencer, nous optimisons avec vous la stratégie de communication et les mots clefs sur lesquels vous voulez vous référencer pour vous faire apparaitre en première page des recherches Google.",
            },
            {
              title: "Référencement SMO & SMA",
              src: "/assets/logo/People.svg",
              text: "Le SMO (Social Media Optimisation) est l’optimisation de vos réseaux sociaux pour faire en sorte que vos visiteurs soient redirigés vers votre site web. Le SMA (Social Media Advertising) est l’équivalent du SEA sauf que les publicités payantes se font sur les réseaux sociaux pour faire en sorte de rediriger cette audiance vers votre site web.",
            },
            {
              title: "Optimisation & reporting",
              src: "/assets/logo/refperformance.svg",
              text: "Selon la stratégie de référencement dont vous avez besoin, nous définirons vos objectifs ensemble. En fonction de ce qui à été choisi, nous analyserons votre site et la concurrence. Nous optimiserons votre site web pour les moteurs de recherche. Dans le cas de publicité payante, nous mettrons en place des campagnes publicitaires en adéquation avec votre stratgie d’entreprise. Vous recevrez un rapport permetant d’évaluer chacune des campagnes de référencement. Selon les résultats obtenus, nous continuerons d’optimiser vos campagnes pour cibler au mieux vos clients.",
            },
          ]}
        />

        <Link href='/contactus' passHref>
          <a>
            <OneServiceBtn btn={"Parlez-nous de votre projet"} />
          </a>
        </Link>
      </Container>
    </NavPage>
  );
};
export default Referencement;
