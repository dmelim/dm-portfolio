import { NextPage } from "next";
import { Fragment } from "react";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import ProjectCardAlt from "../../components/Projects/ProjectCardAlt";
import { finishedPrj } from "../../components/Projects/ProjectsList";

const Projects: NextPage = () => {
  const cardGroup = "grid mb-4 2xl:grid-cols-4 md:grid-cols-2 gap-5";
  const cardGroupTitle = "my-5 ml-5 text-4xl md:text-left text-center";
  return (
    <Fragment>
      <h1 className="my-20 text-6xl items-center text-center">
        <span className=" text-accent ">Welcome,</span> check my projects!
      </h1>
      <h1 className={cardGroupTitle}>Finished Projects:</h1>
      <div className={cardGroup}>
        {finishedPrj("Finished").map((project) => (
          <ProjectCardAlt
            id={project.id}
            cName=""
            key={project.id}
            image={project.image.src}
            alt={project.image.alt}
            details={project.detailsShort}
            title={project.title}
            projectLink={project.link}
          />
        ))}
      </div>
      <h1 className={cardGroupTitle}>I'm currently working on:</h1>
      <div className={cardGroup}>
        {finishedPrj("Working on").map((project) => (
          <ProjectCardAlt
            id={project.id}
            cName=""
            key={project.id}
            image={project.image.src}
            alt={project.image.alt}
            details={project.detailsShort}
            title={project.title}
            projectLink={project.link}
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Projects;
