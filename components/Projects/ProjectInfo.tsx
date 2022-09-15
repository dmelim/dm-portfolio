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
    <div>
      <h1 className="text-5xl my-20 font-bold text-center text-accent">
        {title}
      </h1>
      <div className="h-24 w-24">
        <Image src={image} alt={alt} width="400" height="400" />
      </div>
      <p>{detailsShort}</p>
      <p>{details}</p>
      <a href={projectLink}></a>
    </div>
  );
};

export default ProjectInfo;
