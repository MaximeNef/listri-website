import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";
import MyImage from "../../src/components/shared/composers/myimage";

const BlogDescription = ({ slice }) => (
  <Container className='  rounded-[10px] p-5 md:mx-[20%] my-2 mt-12 '>
    <section className=''>
      <Container className='font-semibold text-[#37474F]  text-[21px] text-left'>
        <h2>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.subtitle} key={i} />
          ))}
        </h2>
      </Container>
      <Container className='text-left font-light text-[#37474F]  leading-7 text-lg  my-5  '>
        {slice?.items?.map((item, i) => (
          <PrismicRichText field={item.description} key={i} />
        ))}
      </Container>

      {slice?.items?.map((item, i) => (
        <>
          {item.image.url ? (
            <Container className='mx-[-20px]'>
              <MyImage
                source={item.image.url}
                key={i}
                w={1000}
                h={600}
                objectFit={"cover"}
                className=' max-w-full h-auto '
              />
            </Container>
          ) : null}
        </>
      ))}
    </section>
  </Container>
);

export default BlogDescription;
