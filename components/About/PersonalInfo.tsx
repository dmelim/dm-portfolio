import ArrowDown from "./ArrowDown";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
const PersonalInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-20">
        <img src="../../images/diogoMelim-big.png" className=" " />
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
      <div className="grid justify-items-center mt-10 accent-inherit">
        <ArrowDown />
      </div>
      <GeneralInfo />
    </div>
  );
};

export default PersonalInfo;
