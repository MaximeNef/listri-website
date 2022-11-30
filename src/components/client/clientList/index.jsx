import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import ClientCard from "../ClientCard";

const ClientList = ({ realisations }) => {
  return (
    <Flex
      type='col'
      justify='center'
      className=' md:mx-10 md:mt-10 md:flex-row mt-5'
    >
      {realisations.map((realisation, index) => {
        return <ClientCard realisation={realisation} key={index} />;
      })}
    </Flex>
  );
};
export default ClientList;
