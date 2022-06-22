import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Popup = ({ link, isOpen, setIsOpen, Pause, setPause }) => {
  function handelClick2() {
    setIsOpen((previsOpen) => !previsOpen);

    setTimeout(function () {
      setPause((prevPause) => !prevPause);
    }, 1500);
    setPause((prevPause) => !prevPause);
  }
  console.log(isOpen, " reg");
  return (
    <Container className=' pt-20 text-2xl font-light	 m-auto space-y-10 tracking-wide  '>
      {link.map((link) => {
        return (
          <Link href={link.href} key={link.page}>
            <a
              onClick={handelClick2}
              className='text-2xl font-light	 m-auto space-y-5 tracking-wide'
            >
              {link.page}
            </a>
          </Link>
        );
      })}
    </Container>
  );
};
export default Popup;
