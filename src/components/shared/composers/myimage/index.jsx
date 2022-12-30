import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};

const MyImage = ({ source, h, w, className, objectFit, layout, id, style }) => {
  return (
    <Image
      id={id}
      loader={myLoader}
      src={source}
      alt="Picture of the author"
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
