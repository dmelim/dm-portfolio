import { NextPage } from "next";
import { Fragment } from "react";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import PersonalInfo from "../components/About/PersonalInfo";

const About: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PersonalInfo />
      <Footer />
    </Fragment>
  );
};

export default About;
