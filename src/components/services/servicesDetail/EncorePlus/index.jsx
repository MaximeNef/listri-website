import React from "react";
import Container from "../../../shared/composers/container";
import CardEncorePlus from "./CardEncorePlus";

const EncorePlus = ({ EncorePlus }) => {
  return (
    <Container>
      <p className='text-[37px] md:text-[75px] md:leading-[80px]  mb-[40px] font-bold leading-[44px] text-darkBlue text-center'>
        Toujours +
      </p>
      <div className='md:flex md:flex-wrap'>
        {EncorePlus.map((encore, i) => {
          return <CardEncorePlus key={i} i={i} encore={encore} />;
        })}{" "}
      </div>
    </Container>
  );
};

export default EncorePlus;
