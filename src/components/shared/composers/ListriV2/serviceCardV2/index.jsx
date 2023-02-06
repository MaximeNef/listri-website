import MyImage from "../../myimage";
import ServiceHeroV2 from "../serviceHeroV2";
import Flex from "../../flex";
import BtnPrimaire from "../btnPrimaire";

const ServiceCardV2 = ({
  title,
  subtitle,
  linkText,
  href,
  imgSrc,
  blueBg,
  CTA,
  ancre,
  subtitle2,
}) => {
  const svg = `<svg width="100%" height="100%" viewBox="0 0 390 98" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0C0 24 18 48 48.5405 49H341C368.062 49 390 70.938 390 98V98H0V0Z" fill="${
    blueBg ? "#283445" : "#F5F5F7"
  }"/>`;

  <svg
    width='100%'
    height='100%'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid meet'
  ></svg>;

  const svgBottom = `<svg width="100%" height="100%" viewBox="0 0 390 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 98C0 74 18 50 48.5405 49H341C368.062 49 390 27.062 390 0H0V98Z" fill="${
    blueBg ? "#283445" : "#F5F5F7"
  }"/>
  </svg>`;

  return (
    <div className='ml-[-25px] mr-[-25px] ' id={ancre}>
      {blueBg ? (
        <div
          className={`mb-[-1px] ${
            title == "Création de site web" ? "" : "bg-lightGrey"
          }`}
          dangerouslySetInnerHTML={{
            __html: svg,
          }}
        />
      ) : title == "Marketing digital" ? (
        <div
          className={`mb-[-1px]   transform rotate-180`}
          dangerouslySetInnerHTML={{
            __html: svgBottom,
          }}
        />
      ) : null}

      <Flex
        className={`${
          blueBg ? "bg-darkBlue  " : "bg-lightGrey"
        } flex-col pb-[50px] pt-[40px] px-5 `}
      >
        <ServiceHeroV2
          subtitle2={subtitle2}
          title={title}
          subtitle={subtitle}
          linkText={linkText}
          href={href}
          textWhite={blueBg}
        />
        <div className='mx-auto mt-8'>
          <MyImage source={imgSrc} h={300} w={300} />
        </div>
        {CTA && (
          <div className='mt-[50px] '>
            <BtnPrimaire
              text={"Découvrez nos services"}
              href={"/blservicesogs"}
            />
          </div>
        )}
      </Flex>
      {blueBg ? (
        <div
          className={`mt-[-1px]  ${
            title == "Marketing digital" ? "" : "bg-lightGrey  mt-[-1px]"
          }`}
          dangerouslySetInnerHTML={{
            __html: svgBottom,
          }}
        />
      ) : title == "Digital Card" ? (
        <div
          className={`pt-[-1px]  transform rotate-180`}
          dangerouslySetInnerHTML={{
            __html: svg,
          }}
        />
      ) : null}
    </div>
  );
};

export default ServiceCardV2;
