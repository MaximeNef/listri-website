import Lottie from "react-lottie";
import Container from "../../../shared/composers/container";
import Link from "next/link";
import Image from "next/image";
import burgerMenu from "./../../../../../public/orangeb.json";
import { useState } from "react";
import { motion } from "framer-motion";
import Popup from "../popup";

const Menuburger = () => {
  const [pause, setPause] = useState(true);
  const [play, setPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState([
    { page: "popup_acceuil", href: "/", selected: false },
    { page: "popup_biens", href: "/", selected: false },
    { page: "popup_about", href: "/", selected: false },
    { page: "popup_contact", href: "/", selected: false },
  ]);
  const defaultOptions = {
    name: "menuBurger",
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-100vh",
    },
  };
  //function qui permet de changer la valeur de la fonction
  function handelClick() {
    if (pause) {
      setIsOpen((previsOpen) => !previsOpen);
      setTimeout(function () {
        setPause((prevPause) => !prevPause);
      }, 1500);
      setPause((prevPause) => !prevPause);
    } else {
    }
  }
  return (
    <Container className=' mb-14 w-full '>
      <Container className='fixed z-20 bg-white w-full top-0  py-2   '>
        <Container className=' m-auto  max-h-12  '>
          <Link href='/'>
            <Image
              src='/assets/logo/logolistri.svg'
              alt='Picture of the author'
              width={4000}
              height={1000}
              className='m-auto'
            />
          </Link>{" "}
        </Container>

        <Container onClick={handelClick} className=' left-2 z-20 fixed  mt-1 '>
          <Lottie
            options={defaultOptions}
            height={48}
            width={43}
            isPaused={pause}
            IsPlaying={play}
            className=''
          />
        </Container>

        <Container className=' right-3 z-20 fixed  mt-2 rounded-[25px]  bg-gradient-to-r from-[#FEA249] to-[#FDBB7E]  py-[10px] px-4 text-white text-sm shadow-lg'>
          <Image
            src='/assets/logo/phone.svg'
            alt='Picture of the author'
            width={20}
            height={20}
            className='m-auto'
          />
        </Container>
        {/* pop-Up menu burger  */}
        <motion.div
          initial={false}
          variants={menuVariants}
          animate={isOpen ? "opened" : "closed"}
          className='bg-white h-full w-full fixed z-10 flex '
          transition={{
            duration: 1,
            times: [0, 0.1, 0.9, 1],
            ease: [0.17, 0.17, 0.73, 0.99],
          }}
        >
          <Popup
            link={link}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            burgerClick={handelClick}
          />
        </motion.div>
      </Container>{" "}
    </Container>
  );
};
export default Menuburger;
