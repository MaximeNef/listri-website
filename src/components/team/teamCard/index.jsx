import MyImage from "../../shared/composers/myimage";

const TeamCard = ({ team }) => {
  const { lastName, firstName, activite, mail, phone, src } = team;
  return (
    <div className=' rounded-[20px] md:max-w-[350px]  md:min-w-[280px] md:w-1/3 '>
      <div className='   rounded-[15px] w-full  mx-auto bg-gradient-to-r from-[#ffb873]  to-[#010D2B] '>
        <div className='relative h-[400px] md:h-[500px]'>
          <MyImage
            className=' rounded-t-[15px]  transform transition duration-500 hover:scale-110'
            source={team.src}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className=' p-5  md:min-h-[170px] bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-70 w-full rounded-b-[15px]'>
          <h3 className=' font-medium text-darkBlue leading-[1.333337]  tracking-[-.01em] text-[20px]'>
            {team.firstName} {team.lastName}
          </h3>{" "}
          <h3 className='mt-[15px] text-[18px] md:text-[24px] font-[600px] leading-[1.14286] text-darkBlue'>
            {team.poste}
          </h3>
          <h3 className='mt-[5px] text-[18px] md:text-[24px] font-[600px] leading-[1.14286] text-darkBlue'>
            {team.activite}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
