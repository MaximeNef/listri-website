import Flex from "../../shared/composers/flex";
import BtnPrimaire from "../../shared/composers/ListriV2/btnPrimaire";
import ServiceHeroV2 from "../../shared/composers/ListriV2/serviceHeroV2";
import MyImage from "../../shared/composers/myimage";

const ServicePageCard = ({
  title,
  subtitle,
  subtitle2,
  linkText,
  href,
  imgSrc,
  blueBg,
  CTA,
  ancre,
}) => {
  const svg = `<svg width="390" height="98" viewBox="0 0 390 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0C0 24 18 48 48.5405 49H341C368.062 49 390 70.938 390 98V98H0V0Z" fill="${
    blueBg ? "#283445" : "#F5F5F7"
  }"/>`;

  const svgBottom = `<svg width="390" height="98" viewBox="0 0 390 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 98C0 74 18 50 48.5405 49H341C368.062 49 390 27.062 390 0H0V98Z" fill="${
    blueBg ? "#283445" : "#F5F5F7"
  }"/>
  </svg>`;

  return (
    <div className='ml-[-25px] mr-[-25px] ' id={ancre}>
      {blueBg ? null : (
        <div
          className={`mb-[-1px] `}
          dangerouslySetInnerHTML={{
            __html: svg,
          }}
        />
      )}

      <Flex
        className={`${
          blueBg ? "bg-darkBlue " : "bg-lightGrey"
        } flex-col pb-[50px] pt-[40px] px-5 `}
      >
        <ServiceHeroV2
          title={title}
          subtitle={subtitle}
          subtitle2={subtitle2}
          linkText={linkText}
          href={href}
          textWhite={blueBg}
        />
        <div className='mx-auto mt-8'>
          <MyImage source={imgSrc} h={300} w={300} />
        </div>
        {CTA && (
          <div className='mt-[50px] '>
            <BtnPrimaire text={"Tous nos services"} href={"/blservicesogs"} />
          </div>
        )}
      </Flex>
      {blueBg ? null : (
        <div
          className={`mt-[-1px] bg-darkBlue`}
          dangerouslySetInnerHTML={{
            __html: svgBottom,
          }}
        />
      )}

      {title == "Référencement" ? (
        <div
          className={`mt-[-1px]  transform rotate-180`}
          dangerouslySetInnerHTML={{
            __html: svg,
          }}
        />
      ) : null}
    </div>
  );
};

export default ServicePageCard;
