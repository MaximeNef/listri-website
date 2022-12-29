import React from "react";
import Container from "../../../shared/composers/container";
import CardEncorePlus from "./CardEncorePlus";

const EncorePlus = () => {
  const EncorePlus = [
    {
      categorie: "gfghf",
      image: "/assets/logoV2/siteWeb.svg",
      ligne1: "fhgfgh",
      ligne2: "fhgfhgff",
    },
    {
      categorie: "fghfhgfhgfghf",
      image: "/assets/logoV2/siteWeb.svg",
      ligne1: "hgfhgfg",
      ligne2: "fghfghf",
    },
    {
      categorie: "hgfghfgh",
      image: "/assets/logoV2/siteWeb.svg",
      ligne1: "gfhgfgh",
      ligne2: "ghfghfhg",
    },
  ];
  return (
    <Container>
      <p className='text-[37px] mb-[40px] font-bold leading-[44px] text-darkBlue text-center'>
        Encore +{" "}
      </p>
      {EncorePlus.map((encore, i) => {
        return <CardEncorePlus key={i} i={i} encore={encore} />;
      })}
    </Container>
  );
};

export default EncorePlus;
