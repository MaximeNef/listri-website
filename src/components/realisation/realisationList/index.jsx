import Flex from '../../shared/composers/flex';
import RealisationCard from '../realisationCard';

const RealisationList = ({ realisations }) => {
  return (
    <Flex
      type="col"
      className=" md:mx-10 md:mt-10 md:flex-row mt-5 justify-center md:justify-start"
    >
      {realisations.map((realisation, index) => {
        return <RealisationCard realisation={realisation} key={index} />;
      })}
    </Flex>
  );
};
export default RealisationList;
