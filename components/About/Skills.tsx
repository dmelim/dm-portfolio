import Badge from "../Layout/Badge";

const Skills = () => {
  return (
    <section className="my-10">
      <div>
        <h1 className="font-bold text-xl ">My Technologies:</h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 items-center justify-items-center my-10">
          <Badge details="JavaScript" />
          <Badge details="HTML" />
          <Badge details="CSS" />
          <Badge details="Python" />
          <Badge details="ReactJS" />
          <Badge details="NextJS" />
          <Badge details="TypeScript" />
          <Badge details="NodeJS" />
          <Badge details="ExpressJS" />
          <Badge details="Redux" />
          <Badge details="TailwindCSS" />
          <Badge details="Bootstrap" />
          <Badge details="Firebase" />
          <Badge details="MySQL" />
          <Badge details="SQLite" />
          <Badge details="Git" />
          <Badge details="Bash" />
          <Badge details="VSCode" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
