import Link from "next/link";

const BoutonCTA = ({ btnCta, current }) => {
  return (
    <>
      <Link href={btnCta.link}>
        <a>
          <div
            className={`mx-[25px] mb-[20px]  text-center text-[20px] font-medium tracking-wide leading-[25px] py-[22px] rounded-[10px] ${
              current
                ? "bg-gradient-to-r from-[#F8A65E] to-[#F36F5F] text-white"
                : "bg-gradient-to-r from-[#939393] to-[#455A64] text-white"
            }`}
          >
            {btnCta.text}
          </div>
        </a>
      </Link>
    </>
  );
};
export default BoutonCTA;
