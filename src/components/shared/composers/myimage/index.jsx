import Image from "next/image";
import Container from "../container";

const myLoader = ({ src, width, quality }) => {
  console.log(src, "src");
  return `${src}`;
};

const MyImage = ({ source, h, w, className, objectFit, layout, id }) => {
  return (
    <Image
      id={id}
      loader={myLoader}
      src={source}
      alt='Picture of the author'
      width={w}
      height={h}
      unoptimized={true}
      layout={layout}
      className={className}
      objectFit={objectFit}
    />
  );
};
export default MyImage;
