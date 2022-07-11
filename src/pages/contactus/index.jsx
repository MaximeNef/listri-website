import React, { useState } from "react";
import NavPage from "../../components/all/nav-page";
import ContactForm from "../../components/contact/contactForm";
import ContactHero from "../../components/contact/ContactHero";
import ContactMarket from "../../components/contact/contactMarket";
import ContactTitle from "../../components/contact/contactTitle";
import ContactWeb from "../../components/contact/contactWeb";
import ProgressBar from "../../components/contact/progressBar";
import Container from "../../components/shared/composers/container";
import Flex from "../../components/shared/composers/flex";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Head from "next/head";

export default function ContactUs() {
  const router = useRouter();
  // States for step progressBar
  const [step, setstep] = useState(1);
  const [web, setweb] = useState(false);
  const [marketing, setmarketing] = useState(false);
  const [autres, setautres] = useState(false);
  const [creationweb, setcreationweb] = useState(false);
  const [design, setdesign] = useState(false);
  const [Social, setsocial] = useState(false);
  const [referencement, setreferencement] = useState(false);
  const [creationmarket, setcreationmarket] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(true);

  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);

      const response = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log("errorrr");
      } else {
        console.log("ok");

        setIsSended(true);
      }
    }
  };

  //function conact web marketing
  function handleClick() {
    setweb((prevweb) => !prevweb);
    setstep((prevstep) => prevstep + 1);
    console.log("web", web);
  }
  function handleClick2() {
    setstep((prevstep) => prevstep + 1);
    setmarketing((prevmarketing) => !prevmarketing);
    console.log("marketing", marketing);
  }

  function handleClick3() {
    setstep((prevstep) => prevstep + 2);
    setautres((prevautres) => !prevautres);
    console.log("autres", autres);
  }
  function handleClick5() {
    setstep((prevstep) => prevstep + 1);
    setcreationweb((prevcreationweb) => !prevcreationweb);
    console.log("creationweb", creationweb);
  }
  function handleClick6() {
    setstep((prevstep) => prevstep + 1);
    setdesign((prevdesign) => !prevdesign);
    console.log("design", design);
  }
  function handleClick7() {
    setstep((prevstep) => prevstep + 1);
    setsocial((prevsocial) => !prevsocial);
    console.log("design", design);
  }
  function handleClick8() {
    setstep((prevstep) => prevstep + 1);
    setreferencement((prevreferencement) => !prevreferencement);
    console.log("design", design);
  }
  function handleClick9() {
    setstep((prevstep) => prevstep + 1);
    setcreationmarket((prevcreationmarket) => !prevcreationmarket);
    console.log("design", design);
  }

  function handleClick4() {
    if (step == 1) {
      setweb(false);
      setmarketing(false);
    } else {
      setautres(false);
      setweb(false);
      setmarketing(false);
      setcreationweb(false);
      setsocial(false);
      setreferencement(false);
      setcreationmarket(false);
      setdesign(false);
      setstep(1);
      console.log("web", marketing);
    }
    if (autres == true) {
      setstep(1);
    }
  }

  // States for contact form fields
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //   Form validation state
  // const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Envoyer");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (lastName.length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
    }
    if (firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let isValidForm = handleValidation();
  //   console.log(lastName, firstName, email, phone, "sendgrid");
  //   if (isValidForm) {
  //     setButtonText("Sending");
  //     const res = await fetch("/api/sendgrid", {
  //       body: JSON.stringify({
  //         email: email,
  //         lastName: lastName,
  //         firstName: firstName,
  //         phone: phone,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });

  //     const { error } = await res.json();
  //     if (error) {
  //       console.log(error);
  //       setShowSuccessMessage(false);
  //       setShowFailureMessage(true);
  //       setButtonText("Send");
  //       return;
  //     }
  //     setShowSuccessMessage(true);
  //     setShowFailureMessage(false);
  //     setButtonText("Send");
  //   }
  //   console.log(lastName, firstName, email, phone);
  // };
  return (
    <NavPage current='Contact'>
      <Head>
        <title>Listri Agence Digitale</title>
        <meta
          name='Listri a pour objectif de vous aider dans votre démarche digitale. Du site web jusqu’à vos réseaux sociaux en passant par le référencement, nous sommes là pour vous rendre visible face à votre audience. '
          content='Generated by Listri'
        />
        <link rel='icon' href='/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className='bg-[#FFFAF5] pt-28  text-[#37474F] w-full'>
        <ContactTitle />
        <ProgressBar step={step} total={4} />

        {/*  premier form 1 */}
        {web || marketing || autres ? (
          <Container></Container>
        ) : (
          <ContactHero
            web={web}
            marketing={marketing}
            handleClick={handleClick}
            handleClick2={handleClick2}
            handleClick3={handleClick3}
          />
        )}

        {/* schemas */}
        {web && creationweb == false && design == false ? (
          <ContactWeb handleClick5={handleClick5} handleClick6={handleClick6} />
        ) : (
          <p> </p>
        )}
        {web && (creationweb || design) ? (
          <div className=' md:max-w-[700px] md:mx-auto'>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Container className='mx-6 '>
                <Container className='m-auto font-medium text-lg mt-10'>
                  {"Finalisez votre demande"}
                </Container>{" "}
                <Flex className=' mt-6  mb-4 w-full ' justify='between'>
                  <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] w-[48%] shrink '>
                    <input
                      type='text'
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      {...register("lastName", { required: true })}
                      name='lastName'
                      className='bg-[#FFFAF5] focus:outline-none rounded-[14px] text-center font-light h-16 shrink '
                      placeholder='Nom'
                    />
                  </Container>
                  <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] w-[48%] shrink '>
                    <input
                      type='text'
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      {...register("firstName", { required: true })}
                      name='firstName'
                      className=' bg-[#FFFAF5] focus:outline-none rounded-[14px]  text-center font-light h-16 shrink'
                      placeholder='Prénom'
                    />
                  </Container>
                </Flex>
                {errors?.lastName && (
                  <p className='text-red-500'>tell us who you are </p>
                )}
                {errors?.lastName && (
                  <p className='text-red-500'>don't be affreid</p>
                )}
                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] mb-4'>
                  <input
                    type='email'
                    name='email'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    {...register("email", { required: true })}
                    className=' bg-[#FFFAF5] focus:outline-none rounded-[14px] h-16 text-center font-light'
                    placeholder='Mail'
                  />
                </Container>
                {errors?.lastName && (
                  <p className='text-red-500'>name cannot be empty.</p>
                )}
                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px]'>
                  <input
                    type='tel'
                    name='phone'
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    {...register("phone", { required: true })}
                    className=' bg-[#FFFAF5] focus:outline-none rounded-[14px] h-16 text-center font-light'
                    placeholder='Téléphone'
                  />
                </Container>
                {errors?.lastName && (
                  <p className='text-red-500'>name cannot be empty.</p>
                )}
                <div className='flex flex-row items-center justify-center'>
                  <button
                    type='submit'
                    className='px-10 mt-8 py-2 bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-gray-50 font-light rounded-[25px] text-lg flex flex-row items-center'
                  >
                    {buttonText}
                  </button>
                </div>
                <div className='text-left'>
                  {showSuccessMessage && (
                    <p className='text-green-500 font-semibold text-sm my-2'>
                      Thankyou! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className='text-red-500'>
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </Container>
            </form>
          </div>
        ) : (
          <p></p>
        )}
        {/* schémas  */}

        {/* schemas */}
        {marketing &&
        referencement == false &&
        creationmarket == false &&
        Social == false ? (
          <ContactMarket
            handleClick7={handleClick7}
            handleClick8={handleClick8}
            handleClick9={handleClick9}
          />
        ) : (
          <p> </p>
        )}
        {marketing && (referencement || creationmarket || Social) ? (
          <div className=' md:max-w-[700px] md:mx-auto'>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Container className='mx-6 '>
                <Container className='m-auto font-medium text-lg mt-10'>
                  {"Finalisez votre demande"}
                </Container>
                <Flex className=' mt-6   mb-4 w-full' justify='between'>
                  <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] w-[48%] shrink '>
                    <input
                      type='text'
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      name='lastName'
                      className='bg-[#FFFAF5] focus:outline-none rounded-[14px] text-center font-light h-16 shrink '
                      placeholder='Nom'
                    />
                  </Container>

                  <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] w-[48%] shrink '>
                    <input
                      type='text'
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      name='firstName'
                      className=' bg-[#FFFAF5] focus:outline-none rounded-[14px]  text-center font-light h-16 shrink'
                      placeholder='Prénom'
                    />
                  </Container>
                </Flex>
                {errors?.lastName && (
                  <p className='text-red-500'>tell us who you are </p>
                )}
                {errors?.lastName && (
                  <p className='text-red-500'>don't be affreid</p>
                )}
                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] mb-4'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className=' bg-[#FFFAF5] focus:outline-none rounded-[14px] h-16 text-center font-light'
                    placeholder='Mail'
                  />
                </Container>

                {errors?.lastName && (
                  <p className='text-red-500'>name cannot be empty.</p>
                )}

                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px]'>
                  <input
                    type='tel'
                    name='phone'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className=' bg-[#FFFAF5] focus:outline-none rounded-[14px] h-16 text-center font-light'
                    placeholder='Téléphone'
                  />
                </Container>

                {errors?.lastName && (
                  <p className='text-red-500'>name cannot be empty.</p>
                )}

                <div className='flex flex-row items-center justify-center'>
                  <button
                    type='submit'
                    className='px-10 mt-8 py-2 bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-gray-50 font-light rounded-[25px] text-lg flex flex-row items-center'
                  >
                    {buttonText}
                  </button>
                </div>
                <div className='text-left'>
                  {showSuccessMessage && (
                    <p className='text-green-500 font-semibold text-sm my-2'>
                      Thankyou! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className='text-red-500'>
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </Container>
            </form>
          </div>
        ) : (
          <p></p>
        )}
        {/* schémas  */}
        {/* schémas autres  */}
        {autres ? (
          <div className=' md:max-w-[700px] md:mx-auto'>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Container className='mx-6 '>
                <Container className='m-auto font-medium text-lg mt-10'>
                  {"Finalisez votre demande"}
                </Container>
                <Flex className=' mt-6  mb-4 w-full' justify='between'>
                  <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] w-[48%] shrink '>
                    <input
                      type='text'
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      name='lastName'
                      className='bg-[#FFFAF5] focus:outline-none rounded-[14px] text-center font-light h-16 shrink '
                      placeholder='Nom'
                    />
                  </Container>

                  <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] w-[48%] shrink '>
                    <input
                      type='text'
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      name='firstName'
                      className=' bg-[#FFFAF5] focus:outline-none rounded-[14px]  text-center font-light h-16 shrink'
                      placeholder='Prénom'
                    />
                  </Container>
                </Flex>
                {errors?.lastName && (
                  <p className='text-red-500'>tell us who you are </p>
                )}
                {errors?.lastName && (
                  <p className='text-red-500'>don't be affreid</p>
                )}
                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px] mb-4'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className=' bg-[#FFFAF5] focus:outline-none rounded-[14px] h-16 text-center font-light'
                    placeholder='Mail'
                  />
                </Container>

                {errors?.lastName && (
                  <p className='text-red-500'>name cannot be empty.</p>
                )}

                <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[2px] rounded-[15px]'>
                  <input
                    type='tel'
                    name='phone'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className=' bg-[#FFFAF5] focus:outline-none rounded-[14px] h-16 text-center font-light'
                    placeholder='Téléphone'
                  />
                </Container>

                {errors?.lastName && (
                  <p className='text-red-500'>name cannot be empty.</p>
                )}

                <div className='flex flex-row items-center justify-center'>
                  <button
                    type='submit'
                    className='px-10 mt-8 py-2 bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-gray-50 font-light rounded-[25px] text-lg flex flex-row items-center'
                  >
                    {buttonText}
                  </button>
                </div>
                <div className='text-left'>
                  {showSuccessMessage && (
                    <p className='text-green-500 font-semibold text-sm my-2'>
                      Thankyou! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className='text-red-500'>
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </Container>
            </form>
          </div>
        ) : (
          <p></p>
        )}
        {/* schémas autres  */}
        <Flex justify='center'>
          <Container onClick={handleClick4}>
            <p className=' text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
              {" retour "}
            </p>
          </Container>
        </Flex>
      </main>
    </NavPage>
  );
}
