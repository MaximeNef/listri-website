import Container from "../../shared/composers/container";
import ProcessBar from "./processBar";
import ProcessContent from "./processContent";

const ProcessHero = () => {
  return (
    <Container className=''>
      <ProcessBar />
      <ProcessContent />
    </Container>
  );
};
export default ProcessHero;
