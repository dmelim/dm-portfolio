import { NextPage } from "next";
import { Fragment } from "react";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import ProjectCardBig from "../components/Projects/projectCardBig";

const Projects: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <h1 className="my-20 text-6xl items-center text-center">
        <span className=" text-accent ">Welcome,</span> check my projects!
      </h1>
      <h1 className=" col-span-2 text-left ml-40 mb-10 text-4xl">
        This portfolio:
      </h1>
      <div className="grid gap-4 mb-4 place-content-center justify-items-center grid-rows-1 grid-cols-1">
        <ProjectCardBig
          cName=""
          details="My personal portfolio project."
          title="Portfolio Website"
          projectLink="https://github.com/dmelim/dm-portfolio"
        />
      </div>
      <h1 className=" col-span-2 text-left ml-40 mb-10 text-4xl">
        Discord Bots:
      </h1>
      <div className="grid gap-4 mb-4 place-content-center justify-items-center grid-rows-1 grid-cols-2">
        <ProjectCardBig
          cName=""
          details="A simple discord bot that spews random quotes."
          title="Random Spewer Bot"
          projectLink="https://github.com/dmelim/random-spewer-bot"
        />
        <ProjectCardBig
          cName=""
          details="A discord bot helper for Pokerole RP"
          title="Pokerole bot"
          projectLink="https://github.com/dmelim/Pokerole-bot"
        />
      </div>
      <h1 className=" col-span-2 text-left ml-40 mb-10 text-4xl">
        Master's Project:
      </h1>
      <ProjectCardBig
        cName=""
        details="EduCert is a decentralized, blockchain-based degree and diploma certification system."
        title="Educert"
        projectLink="https://github.com/dmelim/EduCert"
      />
      <Footer />
    </Fragment>
  );
};

export default Projects;
