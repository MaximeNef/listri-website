import Container from "../../shared/composers/container";
import ProcessBar from "./processBar";
import ProcessContent from "./processContent";

const Processherotry = () => {
  return (
    <Container className='mt-24 md:mx-5'>
      <ProcessBar />
      <ProcessContent />
    </Container>
  );
};
export default Processherotry;
