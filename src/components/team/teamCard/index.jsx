import Link from "next/link";
import { useEffect } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const TeamCard = ({ team }) => {
  const { lastName, firstName, activite, mail, phone, src } = team;
  return (
    <div className='mx-6 rounded-[20px] md:w-1/3 '>
      <div className='  shadow-apple rounded-[15px] w-full  mx-auto bg-gradient-to-r from-[#ffb873]  to-[#010D2B] '>
        <div className='relative h-[420px] md:h-[500px]'>
          <MyImage
            className=' rounded-t-[15px]  transform transition duration-500 hover:scale-110'
            source={team.src}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className=' p-5  md:min-h-[170px] bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-70 w-full rounded-b-[15px]'>
          {" "}
          <h3 className=' font-[350] text-default/80 leading-[1.333337]  tracking-[-.01em] text-[18px]'>
            {" "}
            {team.firstName} {team.lastName}
          </h3>{" "}
          <h3 className='mt-[15px] text-[28px] md:text-[24px] font-[600px] leading-[1.14286]  '>
            {team.activite}
          </h3>
          {team.phone ? (
            <>
              <div className='mr-auto mt-[12px] mb-[2px]'>
                <Link href={`tel:${team.phone}`} passHref>
                  <a className='flex'>
                    <MyImage
                      source='/assets/logo/phoneTeam.svg'
                      w={18}
                      h={18}
                    />{" "}
                    <p className='ml-2tracking-[-.022em] font-[400px] text-[17px] text-default/80'>
                      {team.phone}
                    </p>
                  </a>
                </Link>
              </div>
              <div className='mr-auto'>
                <Link href={`mailto:${team.mail}`} passHref>
                  <a className='flex'>
                    <MyImage source='/assets/logo/email.svg' w={18} h={18} />
                    <p className='ml-2 tracking-[-.022em] font-[400px] text-[17px] text-default/80'>
                      {" "}
                      {team.mail}
                    </p>
                  </a>
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
    // <Container className='pt-[20px] md:min-w-[324px] md:mx-4 md:pb-10 mx-5 '>
    //   <Container className='border-[2px] border-[#FF7E00] bg-white   rounded-[20px]  w-[95%]  h-full m-auto    mt-[-50px] shadow-2xl  '>
    //     <MyImage
    //       source={team.src}
    //       w={100}
    //       h={400}
    //       className={` object-cover  rounded-[18px] ${
    //         team.lastName == "Félicien" ? " object-bottom" : ""
    //       }`}
    //     />
    //   </Container>{" "}
    //   <Container className='p-[2px] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] drop-shadow-lg z-10 mt-[-50px]'>
    //     <Container className='bg-white rounded-[18px] pt-[15px] md:h-[200px] '>
    //       <h3 className='mx-auto font-bold'>
    //         {team.firstName} {team.lastName}
    //       </h3>{" "}
    //       <h3 className='mx-auto text-[20px] md:text-[24px] font-light leading-[26px] text-center flex flex-col items-start justify-center text-default w-[200px]'>
    //         {team.activite}
    //       </h3>
    //       <Flex className='my-[15px] mx-auto space-y-2 flex-col'>
    //         {team.phone ? (
    //           <>
    //             <Container className='mr-auto'>
    //               <Link href={`tel:${team.phone}`} passHref>
    //                 <a className='flex'>
    //                   <MyImage
    //                     source='/assets/logo/phoneTeam.svg'
    //                     w={20}
    //                     h={20}
    //                   />{" "}
    //                   <p className='ml-2'>{team.phone}</p>
    //                 </a>
    //               </Link>
    //             </Container>
    //             <Container className='mr-auto'>
    //               <Link href={`mailto:${team.mail}`} passHref>
    //                 <a className='flex'>
    //                   <MyImage source='/assets/logo/email.svg' w={20} h={20} />
    //                   <p className='ml-2'> {team.mail}</p>
    //                 </a>
    //               </Link>
    //             </Container>
    //           </>
    //         ) : null}
    //       </Flex>
    //     </Container>
    //   </Container>
    // </Container>
  );
};
export default TeamCard;
