import { NextPage } from "next";
import { Fragment } from "react";
import Navbar from "../components/Layout/Navbar";
import ProjectCard from "../components/Projects/projectCard";

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <h1 className="h-80 mt-20 text-6xl items-center text-center">
        <span className=" text-accent ">Welcome,</span> please browse through my
        projects!
      </h1>
      <div className="grid gap-4 mb-4 place-content-center justify-items-center grid-rows-3 grid-cols-2">
        <ProjectCard
          cName=" col-span-2 "
          details="Project about something"
          title="Project 1"
          projectLink="https://www.facebook.com/"
        />
        <ProjectCard
          cName=""
          details="Project about something"
          title="Project 1"
          projectLink="https://www.facebook.com/"
        />
        <ProjectCard
          cName=""
          details="Project about something"
          title="Project 1"
          projectLink="https://www.facebook.com/"
        />
        <ProjectCard
          cName=""
          details="Project about something"
          title="Project 1"
          projectLink="https://www.facebook.com/"
        />
      </div>
    </Fragment>
  );
};

export default Projects;
