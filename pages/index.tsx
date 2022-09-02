import type { NextPage } from "next";
import { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Navbar from "../components/Layout/Navbar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
};

export default Home;
