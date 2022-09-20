import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Code from "../components/Layout/Code";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Layout/Hero";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Diogo Melim Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Code />
      <Footer />
    </Fragment>
  );
};

export default Home;
