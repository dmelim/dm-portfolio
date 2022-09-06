import { NextPage } from "next";
import { Fragment } from "react";
import Navbar from "../components/Layout/Navbar";
import Project from "../components/Projects/Project";

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex mb-4 place-content-center ">
        <Project details="something" title="something" />
        <Project details="something" title="something" />
        <Project details="something" title="something" />
      </div>
    </Fragment>
  );
};

export default Projects;
