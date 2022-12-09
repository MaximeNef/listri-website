import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";
import MyImage from "../../src/components/shared/composers/myimage";

const BlogDescription = ({ slice }) => (
  <Container
    key={slice.uid}
    className='  rounded-[10px] p-5 md:mx-[20%]  mt-8 '
  >
    <section className=''>
      <Container className='font-semibold text-[#37474F]  text-[21px] text-left'>
        <div>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.subtitle} key={i} />
          ))}
        </div>
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
    <style>{`
    
       p a {
        color: blue;
        text-decoration: underline;
    }
    p strong{
      font-weight: 500;
      letter-spacing: 0.22px;
    }
     
    `}</style>
  </Container>
);

export default BlogDescription;
