import Link from "next/link";
import MyImage from "../../shared/composers/myimage";

const CardContact = ({ contactInfo }) => {
  return (
    <div className=' my-10 flex flex-row mx-[22px] shadow-2xl rounded-[10px] h-[150px] bg-[#283445]'>
      <div className='relative h-[150px] w-[48%] bg-gradient-to-r from-[#FFF] to-[#283445]'>
        <MyImage
          source='/assets/logo/julien.png'
          objectFit={"contain"}
          layout={"fill"}
        />
      </div>
      <div className='flex flex-col pl-2  justify-evenly text-white '>
        <div>{contactInfo.nom}</div>
        <div>{contactInfo.tel}</div>
        <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
        <div className='text-[10px] underline underline-offset-1'>
          enregister dans vos contact
        </div>
      </div>
    </div>
  );
};
export default CardContact;
