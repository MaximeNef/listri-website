import Image from "next/image";
import Container from "../../shared/composers/container";

const ServiceImage = () => {
  return (
    <Container className='mb-6 p-5'>
      <Image
        src='/assets/logo/serviceImg.svg'
        alt='Picture of the author'
        width={400}
        height={450}
        className=''
      />
    </Container>
  );
};
export default ServiceImage;
