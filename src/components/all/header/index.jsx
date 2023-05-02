import { useState } from "react";
import Container from "../../shared/composers/container";
import Menuburger from "./menuburger";
import MenuDesktop from "./menuDesktop";

const Header = ({ current }) => {
  const [link, setLink] = useState([
    { page: "Accueil", href: "/", selected: false },
    { page: "Services", href: "/services", selected: false },
    { page: "Réalisations", href: "/realisations", selected: false },
    { page: "Blog", href: "/blogs", selected: false },
    { page: "Equipe", href: "/team", selected: false },
  ]);

  return (
    <Container>
      <Container className='z-50 hidden lg:inline-flex'>
        <MenuDesktop current={current} link={link} />
      </Container>
      <Container className='  md:hidden'>
        <Menuburger current={current} link={link} />
      </Container>
    </Container>
  );
};

export default Header;
