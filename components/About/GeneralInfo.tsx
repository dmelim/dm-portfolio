import { Fragment } from "react";

const GeneralInfo = () => {
  return (
    <div>
      <section className="mx-10 lg:mx-40">
        <h1 className="text-6xl my-10 font-extrabold text-accent">Education</h1>
        <div>
          <div className="mb-20">
            <h2 className="text-3xl font-bold">
              Bachelor's Degree - Multimedia Design (Web Dev)
            </h2>
            <p className="text-xl">
              Superior School of Education from Polytechnic Institute of Coimbra
              September 2016 - July 2019
            </p>
          </div>
          <div className="mb-20">
            <h2 className="text-3xl font-bold">
              Master's Degree - Data Analysis and Decision Support Systems
            </h2>
            <p className="text-xl">
              Coimbra Business School from Polytechnic Institute of Coimbra -
              October 2020 - October 2022
            </p>
          </div>
        </div>
      </section>
      <section className="mx-10 lg:mx-40">
        <h1 className=" text-6xl my-10 font-extrabold text-accent">Courses</h1>
        <ul>
          <li className="mb-20">
            <h1 className="text-3xl font-bold">
              React - The Complete Guide (incl Hooks, React Router, Redux){" "}
              <span className="badge badge-success gap-2">Completed</span>
            </h1>
            <p className="text-xl">
              "Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
              Redux, React Routing, Animations, Next.js and way more!" by
              Maximilian Schwarzmüller, on Udemy.
            </p>
            <button className="btn btn-outline btn-accent my-6">
              <a
                href="https://drive.google.com/file/d/1_eLJayfHDmFAVjKRtTd1rHvgRkKZwZlu/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check the certificate
              </a>
            </button>
          </li>
          <li className="mb-20">
            <h1 className="text-3xl font-bold">
              Understanding TypeScript - 2022 Edition{" "}
              <span className="badge badge-success gap-2">Completed</span>
            </h1>
            <p className="text-xl">
              "Boost your JavaScript projects with TypeScript: Learn all about
              core types, generics, TypeScript + React or Node {"&"} more!" by
              Maximilian Schwarzmüller, on Udemy.
            </p>
            <button className="btn btn-outline btn-accent my-6">
              <a
                href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9c0a8662-e04a-4efe-9f97-d1e495235441.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check the certificate
              </a>
            </button>
          </li>
          <li className="mb-20">
            <h1 className="text-3xl font-bold">
              Next.js {"&"} React - The Complete Guide{" "}
              <span className="badge badge-warning gap-2">On Progress</span>
            </h1>
            <p className="text-xl">
              "Learn NextJS from the ground up and build production-ready,
              fullstack ReactJS apps with the NextJS framework!" by Maximilian
              Schwarzmüller, on Udemy.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GeneralInfo;
