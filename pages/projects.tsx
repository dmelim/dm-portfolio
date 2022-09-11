import { NextPage } from "next";
import { Fragment } from "react";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import ProjectCardAlt from "../components/Projects/projectCardAlt";

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <h1 className="my-20 text-6xl items-center text-center">
        <span className=" text-accent ">Welcome,</span> check my projects!
      </h1>
      <h1 className="my-5 ml-5 text-4xl text-left ">Finished Projects:</h1>
      <div className="grid mb-4 grid-cols-4">
        <ProjectCardAlt
          cName=""
          details="My personal portfolio project."
          title="Portfolio Website"
          projectLink="https://github.com/dmelim/dm-portfolio"
        />
        <ProjectCardAlt
          cName=""
          details="EduCert is a decentralized, blockchain-based degree and diploma certification system."
          title="Educert"
          projectLink="https://github.com/dmelim/EduCert"
        />
        <ProjectCardAlt
          cName=""
          details="A simple discord bot that spews random quotes."
          title="Random Spewer Bot"
          projectLink="https://github.com/dmelim/random-spewer-bot"
        />
        <ProjectCardAlt
          cName=""
          details="A discord bot helper for Pokerole RP"
          title="Pokerole bot"
          projectLink="https://github.com/dmelim/Pokerole-bot"
        />
      </div>
      <h1 className="my-5 ml-5 text-4xl text-left ">
        I'm currently working on:
      </h1>
      <div className="grid mb-4 grid-cols-4">
        <ProjectCardAlt
          cName=""
          details="My personal portfolio project."
          title="Portfolio Website"
          projectLink="https://github.com/dmelim/dm-portfolio"
        />
        <ProjectCardAlt
          cName=""
          details="EduCert is a decentralized, blockchain-based degree and diploma certification system."
          title="Educert"
          projectLink="https://github.com/dmelim/EduCert"
        />
        <ProjectCardAlt
          cName=""
          details="A simple discord bot that spews random quotes."
          title="Random Spewer Bot"
          projectLink="https://github.com/dmelim/random-spewer-bot"
        />
        <ProjectCardAlt
          cName=""
          details="A discord bot helper for Pokerole RP"
          title="Pokerole bot"
          projectLink="https://github.com/dmelim/Pokerole-bot"
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Projects;
