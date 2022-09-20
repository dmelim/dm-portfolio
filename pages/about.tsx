import { NextPage } from "next";
import Footer from "../components/Layout/Footer";
import PersonalInfo from "../components/About/PersonalInfo";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PersonalInfo />
      <Footer />
    </div>
  );
};

export default About;
