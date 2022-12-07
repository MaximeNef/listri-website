import Head from "next/head";
import Link from "next/link";
import NavPage from "../../../components/all/nav-page";
import OneServiceBtn from "../../../components/services/oneService/OneServiceBtn";
import OneServiceContent from "../../../components/services/oneService/oneServiceContent";
import OneServiceImg from "../../../components/services/oneService/OneServiceImg";
import OneServiceTitle from "../../../components/services/oneService/oneServiceTitle";
import Container from "../../../components/shared/composers/container";

const BusinessCard = () => {
  return (
    <NavPage current='Services'>
      <Head>
        <title>
          Digital Business Card - Faites une meilleure première impression
        </title>
        <meta
          name='description'
          content='La meilleure carte de visite pour indépendant et entreprises, faites passer votre réseautage au niveau supérieur.
          Partagez vos informations en un seul tap.'
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
            title={"Digital business card"}
            description={
              "Le monde du digital va très vite, mais certaines habitudes ont la peau dure. La carte de visite en est une ! Même si toutes les nouvelles entreprises utilisent des cartes digitales, ce mouvement n’est pas encore généralisé. "
            }
          />
          <OneServiceImg src={"/assets/logo/businessCard.svg"} />
        </Container>

        <OneServiceContent
          Contents={[
            {
              title: "Partage instantané",
              src: "/assets/logo/wifi.svg",
              text: "La carte digitale est un excellent moyen pour vous et votre entreprise de se démarquer de vos concurrents. Ce petit rectangle de la taille d’un carte bancaire vous permet de partager toutes vos informations importantes en un seul geste. Il vous suffit d’approcher votre carte du téléphone de votre interlocuteur pour déclancher l’action de partage & en bonus avoir un effet WOW !",
            },
            {
              title: "Vos infos en un seul endroit",
              src: "/assets/logo/businessC.svg",
              text: "Votre carte digitale peut contenir vos informations de contact, votre site web mais aussi un calendrier de réservation, une newsletter, un formulaire de contact ou encore votre boutique en ligne. Bref, vous l’aurez compris cette carte est votre nouvel outil de contact indispensable.Comme si tout cela ne suffisait pas, utiliser une carte digitale vous permet de modifier ses informations en temps réel, de partager votre carte virtuelle par mail, sms, …",
            },
            {
              title: "Une carte pour les remplacer toutes",
              src: "/assets/logo/cardTrash.svg",
              text: "Saviez-vous que 80% des cartes de visites étaient jetées à la poubelle dans la première semaine ou elles ont été données. En utilisant cette technologie, vous réduisez votre consommation de papier et donnez à votre entreprise un côté éco-responsable !",
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
export default BusinessCard;
