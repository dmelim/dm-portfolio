import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Badge from "../Layout/Badge";
type Props = {
  title: string;
  details: string;
  alt: string;
  detailsShort: string;
  cName?: string;
  projectLink: string;
  image: string;
  techUsed: string[];
};
const ProjectInfo = ({
  image,
  title,
  alt,
  details,
  detailsShort,
  cName,
  projectLink,
  techUsed,
}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl m-20">
        <img src={"." + image} alt={alt} className="self-center" />
        <div className="card-body">
          <div className=" mb-48 ">
            <div className="mb-10">
              <h2 className="card-title text-accent">{title}</h2>
              <p>{detailsShort}</p>
            </div>
            <h2 className="card-title text-accent">Skills</h2>
            <div>
              {techUsed.map((tech) => (
                <Badge details={tech} />
              ))}
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link href="/projects">Return to projects</Link>
            </button>
            <button
              className={
                projectLink.length !== 0
                  ? "btn btn-primary text-white"
                  : "btn btn-disabled"
              }
            >
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
