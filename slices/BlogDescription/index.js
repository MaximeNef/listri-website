import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";

const BlogDescription = ({ slice }) => (
  <Container className='  rounded-[10px] p-5 md:mx-[20%] my-2 '>
    <section className=''>
      <Container className='font-semibold text-[#37474F]  text-[34px] text-left'>
        <h2>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.titleDescription} key={i} />
          ))}
        </h2>
      </Container>
      <Container className='text-left font-light text-[#37474F] text-[19px] leading-10 md:leading-normal  py-4'>
        {slice?.items?.map((item, i) => (
          <PrismicRichText field={item.contentDescription} key={i} />
        ))}
      </Container>
    </section>
  </Container>
);

export default BlogDescription;
