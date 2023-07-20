import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";
import MyImage from "../../src/components/shared/composers/myimage";

const BlogDescription = ({ slice }) => (
  <Container
    key={slice.uid}
    className='  rounded-[10px] p-5 md:mx-[12%]  mt-8 md:mb-8 '
  >
    <section className=' md:justify-between  '>
      <div className=''>
        <Container className='font-semibold text-[#37474F]  text-[21px] md:text-[31px] text-left'>
          <h2>
            {slice?.items?.map((item, i) => (
              <PrismicRichText field={item.subtitle} key={i} />
            ))}
          </h2>
        </Container>
        <h3 className='text-left font-light text-[#37474F]  leading-7 text-lg  my-5  '>
          {slice?.items?.map((item, i) => (
            <PrismicRichText field={item.description} key={i} />
          ))}
        </h3>
      </div>
      <div className='my-auto relative '>
        {slice?.items?.map((item, i) => (
          <>
            {item.image.url ? (
              <>
                <Container className='mx-[-20px] md:hidden h-[30vh]'>
                  <MyImage
                    source={item.image.url}
                    key={i}
                    w={300}
                    h={300}
                    objectFit={"cover"}
                    layout={"fill"}
                    className=' max-w-full h-auto rounded-xl  '
                  />
                </Container>
                <Container className=' hidden md:inline-flex h-[50vh]'>
                  <MyImage
                    source={item.image.url}
                    key={i}
                    h='50'
                    w={"100"}
                    objectFit={"cover"}
                    layout={"fill"}
                    className=' max-w-full h-auto rounded-xl  '
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
