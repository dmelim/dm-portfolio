import Image from "next/image";
import { Fragment } from "react";
import profilePic from "../../public/diogo-melim.jpg";
import ArrowDown from "./ArrowDown";
const PersonalInfo = () => {
  return (
    <Fragment>
      <div className="hero min-h-screen">
        <div className="hero-content grid grid-cols-1 ">
          <Image
            src={profilePic}
            width="250"
            height="400"
            className="max-w-sm mask mask-circle col-span-1 hover:rotate-12 hover:mask-square duration-300 brightness-95"
          />
          <div className="grid justify-items-center col-span-2 row-span-3">
            <h1 className="text-5xl font-bold text-center">
              DIOGO
              <span> </span>
              <span className=" text-accent ">MELIM</span>
            </h1>
            <p className="py-6 text-center">
              Web Developer based in Madeira Island
            </p>
            <p>See more about me and my career</p>
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="grid">
        <h1>Education</h1>
        <div>
          <h1>Bachelors Degree</h1>
          <p>Information</p>
          <h1>Master's Degree</h1>
          <p>Information</p>
        </div>
      </div>
      <div className="grid">
        <h1>Courses</h1>
        <div>
          <h1>React</h1>
          <p>Information</p>
          <h1>TypeScript</h1>
          <p>Information</p>
          <h1>NextJS</h1>
          <p>Information</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalInfo;
