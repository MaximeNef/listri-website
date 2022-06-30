import Container from "../../shared/composers/container";

const MaxWidth = ({ children }) => {
  return (
    <Container className='md:max-w-[1180px] lg:m-auto lg:w-full'>
      {children}
    </Container>
  );
};
export default MaxWidth;
