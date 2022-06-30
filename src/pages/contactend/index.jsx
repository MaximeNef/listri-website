import Image from "next/image";
import Link from "next/link";
import NavPage from "../../components/all/nav-page";
import ContactTitle from "../../components/contact/contactTitle";
import ProgressBar from "../../components/contact/progressBar";
import Container from "../../components/shared/composers/container";
import Flex from "../../components/shared/composers/flex";

export default function ContactEnd() {
  return (
    <NavPage current='contactus'>
      <main className='bg-[#FFFAF5] pt-28  text-[#37474F] pb-20'>
        <ProgressBar step={4} total={4} />
        <Flex justify='center' className=' font-medium text-lg mt-10 mb-6 '>
          {"Merci pour votre demande"}
        </Flex>
        <Container className=''>
          <Image
            src='/assets/logo/finish.svg'
            alt='Picture of the author'
            width={350}
            height={350}
            className=''
          />
        </Container>{" "}
        <Link href='/' passHref>
          <a>
            <Container className='m-auto rounded-[50px]  bg-gradient-to-r from-[#FF7E00] to-[#FDBB7E]  items-center max-w-[156px] py-3 text-[#FFFAF5] font-medium'>
              {"Accueil"}
            </Container>
          </a>
        </Link>
      </main>
    </NavPage>
  );
}
