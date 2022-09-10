import type { NextPage } from "next";

import { Fragment } from "react";
import Code from "../components/Layout/Code";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";
import Navbar from "../components/Layout/Navbar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Code />
      <Footer />
    </Fragment>
  );
};

export default Home;
