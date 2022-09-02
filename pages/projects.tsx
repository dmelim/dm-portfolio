import { NextPage } from "next";
import { Fragment } from "react";
import Navbar from "../components/Layout/Navbar";
import Project from "../components/Projects/Project";

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Project orientation={"normal"} />
      <Project orientation={"reversed"} />
      <Project orientation={"normal"} />
    </Fragment>
  );
};

export default Projects;
