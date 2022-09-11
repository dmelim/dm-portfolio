type Props = {
  title: string;
  details: string;
  cName: string;
  projectLink: string;
};
const ProjectCardAlt = ({ title, details, cName, projectLink }: Props) => {
  return (
    <div
      className={"card w-96 bg-base-100 shadow-xl image-full mx-auto " + cName}
    >
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
