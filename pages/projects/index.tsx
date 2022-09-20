import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import ProjectCardAlt from "../../components/Projects/ProjectCardAlt";
import { finishedPrj } from "../../components/Projects/ProjectsList";

const Projects: NextPage = () => {
  const cardGroup = "grid mb-4 2xl:grid-cols-4 lg:grid-cols-2 gap-5";
  const cardGroupTitle = "my-5 ml-5 text-4xl lg:text-left text-center";
  return (
    <Fragment>
      <Head>
        <title>Projects Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="my-20 text-6xl items-center text-center">
        <span className=" text-accent ">Welcome!</span> Check out my projects:
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
