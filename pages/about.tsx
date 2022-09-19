import { NextPage } from "next";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import PersonalInfo from "../components/About/PersonalInfo";

const About: NextPage = () => {
  return (
    <div>
      <PersonalInfo />
      <Footer />
    </div>
  );
};

export default About;
