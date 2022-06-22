import Page from "../../shared/composers/page";
import Header from "../header";
import Footer from "../Footer";
import Image from "next/image";
import Container from "../../shared/composers/container";
const NavPage = ({ children, current }) => {
  return (
    <Container className=''>
      <Page className='font-family text-[#37474F] bg-[#FFFAF5] '>
        <Header current={current} />
        {children}
      </Page>{" "}
      <Footer />
    </Container>
  );
};

export default NavPage;
