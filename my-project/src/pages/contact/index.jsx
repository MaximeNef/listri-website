import Head from "next/head";
import NavPage from "../../components/all/nav-page";
import ContactHero from "../../components/contact/ContactHero";
import ContactTitle from "../../components/contact/contactTitle";
import ProgressBar from "../../components/contact/progressBar";
import Container from "../../components/shared/composers/container";
import { useState } from "react";

export default function Contact() {
  // const [step, setstep] = useState(1);
  // const [web, setweb] = useState(false);
  // const [marketing, setmarketing] = useState(false);
  // function handleClick() {
  //   setweb((prevweb) => !prevweb);
  //   setstep((prevstep) => prevstep + 1);
  //   console.log("web", web);
  // }
  // function handleClick2() {
  //   setstep((prevstep) => prevstep + 1);
  //   setmarketing((prevmarketing) => !prevmarketing);
  //   console.log("web", marketing);
  // }
  // function handleClick3() {
  //   setweb(false);
  //   setmarketing(false);
  //   setstep((prevstep) => prevstep - 1);
  //   console.log("web", marketing);
  // }

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      methtod: "post",
      main: JSON.stringify(formData),
    });
  }
  return (
    <NavPage current='Contact'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-[#FFFAF5]  pt-28'>
        {/* <ContactTitle />
        <ProgressBar step={step} total={4} />

        {web || marketing ? (
          <div></div>
        ) : (
          <ContactHero
            web={web}
            marketing={marketing}
            handleClick={handleClick}
            handleClick2={handleClick2}
          />
        )}

        {web ? <Container> web contact </Container> : <Container> </Container>}
        {marketing ? (
          <Container> marketing contact</Container>
        ) : (
          <Container> </Container>
        )}

        <Container onClick={handleClick3}> retour </Container> */}

        <form method='post' onSubmit={handleOnSubmit}>
          <p>
            name
            <input type='text' name='name' />
          </p>
          <p>
            email
            <input type='email' name='email' />
          </p>
          <p>
            <button type='submit'>submit</button>
          </p>
        </form>
      </main>
    </NavPage>
  );
}
