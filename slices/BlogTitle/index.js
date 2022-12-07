import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";
import Flex from "../../src/components/shared/composers/flex";
import MyImage from "../../src/components/shared/composers/myimage";

const BlogTitle = ({ slice }) => {
  return (
    <Container className='md:mx-[20%] '>
      {slice?.items?.map(
        (item, i /* import { PrismicRichText } from '@prismicio/react' */) => (
          <Container key={i} className='mx-5 mb-5'>
            <div className='flex flex-row space-x-5 mb-5'>
              <div>
                <Flex className='bg-[#FEA249] w-fit rounded-[20px] text-white space-x-1 py-2 px-4 font-[350]'>
                  <PrismicRichText field={item.timing} />
                  <p>min de lecture</p>
                </Flex>
              </div>
              <div>
                <Flex className='bg-[#FEA249] w-fit rounded-[20px] text-white space-x-1 py-2 px-4 font-[350]'>
                  {item.category}
                </Flex>
              </div>
            </div>

            <h1 className='pb-5 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FF7E00]/50  overflow-hidden '>
              <PrismicRichText field={item.title} />
            </h1>

            <Container className='font-light leading-7 text-lg mb-7'>
              <PrismicRichText field={item.description} />
            </Container>
            <Container>
              <MyImage
                source={item.image?.url}
                key={i}
                h='400'
                w='200'
                objectFit={"cover"}
                className='rounded-xl'
              />
            </Container>
          </Container>
        )
      )}
    </Container>
  );
};

export default BlogTitle;
