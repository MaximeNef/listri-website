import Link from "next/link";

const BoutonCTA = ({ btnCta }) => {
  return (
    <>
      <Link href={btnCta.link}>
        <a>
          <div className='mx-[25px] mb-[20px] bg-gradient-to-r from-[#939393] to-[#455A64] text-white text-center text-[20px] font-medium tracking-wide leading-[25px] py-[22px] rounded-[10px]'>
            {btnCta.text}
          </div>
        </a>
      </Link>
    </>
  );
};
export default BoutonCTA;
