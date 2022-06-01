import Page from "../../shared/composers/page";
import Header from "../header";
import Footer from "../Footer";
import Image from "next/image";
import Container from "../../shared/composers/container";
const NavPage = ({ children, current }) => {
  return (
    <Page className='!font-body text-[#080038]'>
      <Header current={current} />
      {children}
      <Container className='p-10 bg-white'>fr</Container>
      <Footer />
    </Page>
  );
};

export default NavPage;
