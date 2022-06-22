import { useState } from "react";
import Container from "../../shared/composers/container";
import Menuburger from "./menuburger";
import MenuDesktop from "./menuDesktop";

const Header = ({ current }) => {
  const [link, setLink] = useState([
    { page: "Accueil", href: "/", selected: false },
    { page: "Nos services", href: "/services", selected: false },
    { page: "Nos realisations", href: "/realisations", selected: false },
    { page: "Blog", href: "/blogs", selected: false },
  ]);

  return (
    <Container>
      <Container className='z-50 hidden lg:inline-flex'>
        <MenuDesktop current={current} link={link} />
      </Container>
      <Container className='  lg:hidden'>
        <Menuburger />
      </Container>
    </Container>
  );
};

export default Header;
