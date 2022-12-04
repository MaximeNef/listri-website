import Lottie from "react-lottie";
import Container from "../../../shared/composers/container";
import Link from "next/link";
import Image from "next/image";
import burgerMenu from "./../../../../../public/orangeb.json";
import { useState } from "react";
import { motion } from "framer-motion";
import Popup from "../popup";
import Flex from "../../../shared/composers/flex";
import { useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import logolistri from "../../../../../public/assets/logo/logolistri.svg";
import MyImage from "../../../shared/composers/myimage";
import BurgerIcone from "./BurgerIcone";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const Menuburger = ({ current }) => {
  const [pause, setPause] = useState(true);
  const [play, setPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState([
    {
      page: "Accueil",
      href: "/",
      selected: false,
      src: "/assets/logo/Home.svg",
    },
    {
      page: "Services",
      href: "/services",
      selected: false,
      src: "/assets/logo/Online.svg",
    },
    {
      page: "Réalisations",
      href: "/realisations",
      selected: false,
      src: "/assets/logo/Windows.svg",
    },
    {
      page: "Blog",
      href: "/blogs",
      selected: false,
      src: "/assets/logo/GoodNotes.svg",
    },
    {
      page: "Contact",
      href: "/contactus",
      selected: false,
      src: "/assets/logo/Contacts.svg",
    },
    {
      page: "Team",
      href: "/team",
      selected: false,
      src: "/assets/logo/Contacts.svg",
    },
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
      left: 0,
    },
    closed: {
      left: "-100vh",
    },
  };
  //function qui permet de changer la valeur de la fonction
  function handelClick() {
    setIsOpen((previsOpen) => !previsOpen);
    // if (isOpen) {
    //   setIsOpen((previsOpen) => !previsOpen);
    //   setTimeout(function () {
    //     setPause((prevPause) => !prevPause);
    //   }, 1500);
    //   setPause((prevPause) => !prevPause);
    // } else {
    //   setIsOpen((previsOpen) => !previsOpen);
    // }
  }

  return (
    <Container className=' w-full '>
      <Container className='fixed z-[90] bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-70 w-full top-0  py-2    '>
        <Container className=' m-auto  max-h-12  z-20'>
          <Link href='/' passHref>
            <a className='h-[40px]'>
              <MyImage source='/assets/logo/logolistri.svg' w={200} h={40} />{" "}
              <p className='z-[90]'>{isOpen}</p>
            </a>
          </Link>{" "}
        </Container>

        <BurgerIcone handelClick={handelClick} isOpen={isOpen} />

        <Container className=' right-3 z-20 fixed  mt-[6px] rounded-[10px]  bg-gradient-to-r from-[#FF7E00]/80 to-[#ffb873]/50  py-[5px] px-[10px] text-white text-sm  shadow-client '>
          <a className='my-auto items-center' href='tel: +32470684551'>
            <Container className='m-auto'>
              <MyImage source='/assets/logo/phone.svg' h={20} w={20} />
              {/* <Image
                loader={myLoader}
                src='/assets/logo/phone.svg'
                alt='Picture of the author'
                width={20}
                height={20}
                className='m-auto'
              /> */}
            </Container>
          </a>
        </Container>
      </Container>{" "}
      {/* pop-Up menu burger */}
      <motion.div
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className='bg-white h-full w-full fixed z-[80] flex '
        transition={{
          duration: 0.4,
          times: [0, 0.1, 0.3, 0],
          // ease: [0.57, 0.97, 0.73, 0.57],
        }}
      >
        <Popup
          link={link}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pause={pause}
          setPause={setPause}
          handelClick={handelClick}
          current={current}
        />
      </motion.div>
    </Container>
  );
};
export default Menuburger;
