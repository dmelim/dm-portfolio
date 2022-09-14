import Image from "next/image";
import { Fragment } from "react";
import profilePic from "../../public/diogoMelim-big.png";
import ArrowDown from "./ArrowDown";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
const PersonalInfo = () => {
  return (
    <Fragment>
      <div className="grid justify-items-center items-center mt-20">
        <div className="grid grid-cols-2 justify-items-center">
          <Image src={profilePic} className=" " />
          <div className="grid justify-items-center items-center">
            <div className="text-center">
              <h1 className="text-5xl my-20 font-bold text-center text-accent">
                Hey!
              </h1>
              <p className="text-center my-3">
                I'm a Web Developer based in Madeira Island!
              </p>
              <p>See more about me and my career.</p>
              <Skills />
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-items-center mt-10 accent-inherit">
        <ArrowDown />
      </div>
      <GeneralInfo />
    </Fragment>
  );
};

export default PersonalInfo;
