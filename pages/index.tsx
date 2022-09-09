import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Navbar from "../components/Layout/Navbar";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <div className=" grid place-items-center ">
        <div className="indicator">
          <div className="indicator-item indicator-bottom">
            <button
              className="btn btn-primary"
              onClick={() => {
                router.push("/projects");
              }}
            >
              projects
            </button>
          </div>
          <div
            className="mockup-code w-11 mx-auto animate-pulse"
            onClick={() => {
              router.push("/projects");
            }}
          >
            <pre data-prefix="$">
              <code>cd /projects</code>
            </pre>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
