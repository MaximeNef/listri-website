import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";
import MyImage from "../../src/components/shared/composers/myimage";

const BlogDescription = ({ slice }) => (
  <Container
    key={slice.uid}
    className='  rounded-[10px] p-5 md:mx-[20%]  mt-8 '
  >
    <section className='md:flex md:justify-between '>
      <div className='md:w-[50%]'>
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
      </div>
      <div className='my-auto'>
        {slice?.items?.map((item, i) => (
          <>
            {item.image.url ? (
              <>
                <Container className='mx-[-20px] md:hidden'>
                  <MyImage
                    source={item.image.url}
                    key={i}
                    w={300}
                    h={300}
                    objectFit={"contain"}
                    className=' max-w-full h-auto  '
                  />
                </Container>
                <Container className='mx-[-20px] hidden md:inline-flex'>
                  <MyImage
                    source={item.image.url}
                    key={i}
                    w={200}
                    h={200}
                    objectFit={"contain"}
                    className=' max-w-full h-auto  '
                  />
                </Container>
              </>
            ) : null}
          </>
        ))}
      </div>
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
