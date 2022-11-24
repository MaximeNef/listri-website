import Container from '../../shared/composers/container';
import ClientCard from '../ClientCard';

const ClientList = ({ realisations }) => {
  return (
    <Container>
      {realisations.map((realisation, index) => {
        return <ClientCard realisation={realisation} key={index} />;
      })}
    </Container>
  );
};
export default ClientList;
