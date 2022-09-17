import { useRouter } from "next/router";

type Props = {
  id: string;
  title: string;
  alt: string;
  details: string;
  cName: string;
  projectLink: string;
  image: string;
};
const ProjectCardAlt = ({
  id,
  image,
  alt,
  title,
  details,
  cName,
  projectLink,
}: Props) => {
  const router = useRouter();
  return (
    <div
      className={"card w-96 bg-base-100 shadow-xl image-full mx-auto " + cName}
    >
      <figure>
        <img src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p> {details} </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              router.push("/projects/" + id);
            }}
          >
            Visit the project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardAlt;
