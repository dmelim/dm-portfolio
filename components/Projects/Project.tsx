type Props = {
  title: string;
  details: string;
};

const Project = ({ title, details }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full m-5  ">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p> {details} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Project;
