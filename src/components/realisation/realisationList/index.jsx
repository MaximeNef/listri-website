import Flex from "../../shared/composers/flex";
import RealisationCard from "../realisationCard";

const RealisationList = ({ realisations }) => {
  return (
    <Flex
      type='col'
      className='z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9  md:ml-[70px] md:mt-10 md:flex-row mt-5 justify-center md:justify-start'
    >
      {realisations.map((realisation, index) => {
        return <RealisationCard realisation={realisation} key={index} />;
      })}
    </Flex>
  );
};
export default RealisationList;
