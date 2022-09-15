const HeroTest = () => {
  const classTitle =
    "text-9xl font-medium uppercase tracking-widest underline ";
  return (
    <div className="container mx-auto mt-10">
      <div className="grid gap-4 grid-rows-3 grid-cols-1 justify-items-center content-center items-center">
        <div className={classTitle + "animate-wiggleLeft animate-repeat-1"}>
          Diogo
        </div>
        <div
          className={
            classTitle + "animate-wiggleRight animate-repeat-1 text-accent"
          }
        >
          Melim
        </div>
        <div className="text-4xl uppercase text-white tracking-widest">
          Web-Developer
        </div>
      </div>
    </div>
  );
};

export default HeroTest;
