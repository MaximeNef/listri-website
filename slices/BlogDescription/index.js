import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";

const BlogDescription = ({ slice }) => (
  <section>
    <Container className='font-semibold text-[#37474F]  text-[19px] text-center'>
      {slice?.items?.map((item, i) => (
        <PrismicRichText field={item.titleDescription} key={i} />
      ))}
    </Container>
    <Container className='text-center font-light text-[#37474F] text-[17px] mx-5 py-4'>
      {slice?.items?.map((item, i) => (
        <PrismicRichText field={item.contentDescription} key={i} />
      ))}
    </Container>
  </section>
);

export default BlogDescription;
