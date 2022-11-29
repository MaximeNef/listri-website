import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import ClientCard from "../ClientCard";

const ClientList = ({ realisations }) => {
  return (
    <Flex type='row' justify='center' className=' '>
      {realisations.map((realisation, index) => {
        return <ClientCard realisation={realisation} key={index} />;
      })}
    </Flex>
  );
};
export default ClientList;
