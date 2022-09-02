import type { NextPage } from "next";
import { Fragment } from "react";
import Hero from "../components/homePage/hero";
import Navbar from "../components/homePage/Navbar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
};

export default Home;
