import Image, { StaticImageData } from "next/image";
type Props = {
  title: string;
  details: string;
  alt: string;
  detailsShort: string;
  cName?: string;
  projectLink: string;
  image: string;
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
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl m-20">
        <img src={image} alt={alt} className="" />
        <div className="card-body">
          <h2 className="card-title text-accent">{title}</h2>
          <p>{detailsShort}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                Check GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-base-100 shadow-xl m-20 p-10">
        <h2 className="text-accent text-xl font-bold ">More information:</h2>
        <p className="mt-5">{details}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
