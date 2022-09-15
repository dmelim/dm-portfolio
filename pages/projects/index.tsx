import { NextPage } from "next";
import { Fragment } from "react";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import ProjectCardAlt from "../../components/Projects/projectCardAlt";
import { ProjectList } from "../../components/Projects/ProjectsList";

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <h1 className="my-20 text-6xl items-center text-center">
        <span className=" text-accent ">Welcome,</span> check my projects!
      </h1>
      <h1 className="my-5 ml-5 text-4xl text-left ">Finished Projects:</h1>
      <div className="grid mb-4 grid-cols-4">
        {ProjectList.filter((project) => project.finished === "Finished").map(
          (project) => (
            <ProjectCardAlt
              cName=""
              key={project.id}
              image={project.image.src}
              alt={project.image.alt}
              details={project.details}
              title={project.title}
              projectLink={project.link}
            />
          )
        )}
      </div>
      <h1 className="my-5 ml-5 text-4xl text-left ">
        I'm currently working on:
      </h1>
      <div className="grid mb-4 grid-cols-4">
        {ProjectList.filter((project) => project.finished === "Working on").map(
          (project) => (
            <ProjectCardAlt
              cName=""
              key={project.id}
              image={project.image.src}
              alt={project.image.alt}
              details={project.details}
              title={project.title}
              projectLink={project.link}
            />
          )
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Projects;
