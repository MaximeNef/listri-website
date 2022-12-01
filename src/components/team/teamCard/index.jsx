import Link from "next/link";
import { useEffect } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const TeamCard = ({ team }) => {
  const { lastName, firstName, activite, mail, phone, src } = team;
  return (
    <Container className='pt-[20px] md:min-w-[324px] md:mx-4 md:pb-10 mx-5 '>
      <Container className='border-[2px] border-[#FF7E00] bg-white   rounded-[20px]  w-[95%]  h-full m-auto    mt-[-50px] shadow-2xl  '>
        <MyImage
          source={team.src}
          w={100}
          h={400}
          className={` object-cover  rounded-[18px] ${
            team.lastName == "Félicien" ? " object-bottom" : ""
          }`}
        />
      </Container>{" "}
      <Container className='p-[2px] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[20px] drop-shadow-lg z-10 mt-[-50px]'>
        <Container className='bg-white rounded-[18px] pt-[15px] md:h-[200px] '>
          <h3 className='mx-auto font-bold'>
            {team.firstName} {team.lastName}
          </h3>{" "}
          <h3 className='mx-auto text-[20px] md:text-[24px] font-light leading-[26px] text-center flex flex-col items-start justify-center text-default w-[200px]'>
            {team.activite}
          </h3>
          <Flex className='my-[15px] mx-auto space-y-2 flex-col'>
            {team.phone ? (
              <>
                <Container className='mr-auto'>
                  <Link href={`tel:${team.phone}`} passHref>
                    <a className='flex'>
                      <MyImage
                        source='/assets/logo/phoneTeam.svg'
                        w={20}
                        h={20}
                      />{" "}
                      <p className='ml-2'>{team.phone}</p>
                    </a>
                  </Link>
                </Container>
                <Container className='mr-auto'>
                  <Link href={`mailto:${team.mail}`} passHref>
                    <a className='flex'>
                      <MyImage source='/assets/logo/email.svg' w={20} h={20} />
                      <p className='ml-2'> {team.mail}</p>
                    </a>
                  </Link>
                </Container>
              </>
            ) : null}
          </Flex>
        </Container>
      </Container>
    </Container>
    // <Container>
    //   <Flex justify='center' className='w-full p-10  '>
    //     <Container className='mx-auto border-[2px] border-orange-400 w-fit  rounded-[20px] bg-white px-10 shadow-realisationCard'>
    //       <Container className='border-[2px] border-orange-400   rounded-full  w-[200px] h-[200px] m-auto mt-[-100px] '>
    //         <MyImage
    //           source=c
    //           w={200}
    //           h={200}
    //           className={"rounded-full"}
    //         />
    //       </Container>
    //       <Flex
    //         type='col'
    //         align='center'
    //         justify='center'
    //         className='space-y-5 my-10 bg-white'
    //       >
    //         <Flex type='col' align='center'>
    //           <Flex className='space-x-1 '>
    //             <p className='text-bold text-[19px]'> {team.lastName}</p>
    //             <p className='text-bold text-[19px]'> {team.firstName}</p>
    //           </Flex>
    //           <Container justify='center'>
    //             <p className='font-light text-center'> {team.activite}</p>
    //           </Container>{" "}
    //         </Flex>

    //         <Container className='space-y-1 text-center'>
    //           <Container>
    //             <a href={`mailto:${team.mail}`}>{team.mail}</a>
    //           </Container>
    //           <Container>
    //             {" "}
    //             <a href={`tel:${team.phone}`}>{team.phone} </a>
    //           </Container>
    //         </Container>
    //         <Flex justify='center' className=' space-x-16 w-full pt-6'>
    //           <Container>
    //             <a href={`tel:${team.phone}`}>
    //               <MyImage source='/assets/logo/phoneTeam.svg' w={30} h={30} />{" "}
    //             </a>
    //           </Container>
    //           <Container>
    //             <a href={`mailto:${team.mail}`}>
    //               <MyImage source='/assets/logo/email.svg' w={30} h={30} />
    //             </a>
    //           </Container>
    //         </Flex>
    //       </Flex>
    //     </Container>
    //   </Flex>{" "}
    // </Container>
  );
};
export default TeamCard;
