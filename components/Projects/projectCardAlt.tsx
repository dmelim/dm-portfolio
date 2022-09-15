import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  alt: string;
  details: string;
  cName: string;
  projectLink: string;
  image: string | StaticImageData;
};
const ProjectCardAlt = ({
  image,
  alt,
  title,
  details,
  cName,
  projectLink,
}: Props) => {
  return (
    <div
      className={"card w-96 bg-base-100 shadow-xl image-full mx-auto " + cName}
    >
      <figure>
        <Image src={image} alt={alt} layout="fill" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p> {details} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              Visit the project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardAlt;
