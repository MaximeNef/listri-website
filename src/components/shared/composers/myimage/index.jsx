import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  console.log(src, "src");
  return `${src}`;
};

const MyImage = ({ source, h, w, className }) => {
  return (
    <Image
      loader={myLoader}
      src={source}
      alt='Picture of the author'
      width={w}
      height={h}
      unoptimized={true}
      className={className}
    />
  );
};
export default MyImage;
