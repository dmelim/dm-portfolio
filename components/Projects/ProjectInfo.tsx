import Image, { StaticImageData } from "next/image";
type Props = {
  title: string;
  details: string;
  alt: string;
  detailsShort: string;
  cName?: string;
  projectLink: string;
  image: string | StaticImageData;
};
const ProjectInfo = ({
  image,
  title,
  alt,
  details,
  detailsShort,
  cName,
  projectLink,
}: Props) => {
  return (
    <div className="grid place-items-center justify-center">
      <h1 className="text-5xl my-20 font-bold text-center text-accent">
        {title}
      </h1>
      <div className="grid grid-cols-2 place-items-center justify-center shadow-black shadow-lg">
        <div className="h-24 w-24">
          <Image
            src={image}
            alt={alt}
            height="800"
            width="800"
            layout="responsive"
          />
        </div>
        <div>
          <p className="text-center mx-4">{detailsShort}</p>
          <a href={projectLink}></a>
        </div>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default ProjectInfo;
