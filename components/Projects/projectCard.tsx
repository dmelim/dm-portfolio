type Props = {
  title: string;
  details: string;
  cName: string;
  projectLink: string;
};

const ProjectCard = ({ title, details, cName, projectLink }: Props) => {
  return (
    <div
      className={
        " bg-base-300 shadow-xl w-fit grid grid-cols-2 grid-rows-2 p-3 items-center my-9  mx-auto" +
        cName
      }
    >
      <figure className=" col-span-2 row-span-2 translate-x-10 -translate-y-10">
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className=" col-span-2 row-span-2 grid grid-cols-2 justify-items-center my-9 translate-x-20 -translate-y-10">
        <div className="col-span-1">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
        </div>
        <div className="col-span-1">
          <button className="btn btn-primary">
            <a href={projectLink}>Visit the project</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
