type Project = {
  id: string;
  title: string;
  detailsShort: string;
  details: string;
  link: string;
  image: { src: string; alt: string };
  finished: "Finished" | "Working on";
  techUsed: string[];
};

const ProjectList: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    detailsShort: "My personal portfolio project.",
    details:
      "This is my portfolio which I developed to showcase my capabilities with TypeScript and NextJS.",
    image: {
      src: "../../images/personalPorfolio.png",
      alt: "Portfolio Website",
    },
    link: "https://github.com/dmelim/dm-portfolio",
    finished: "Finished",
    techUsed: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS"],
  },
  {
    id: "p2",
    title: "Educert",
    detailsShort:
      "EduCert is a decentralized, blockchain-based degree and diploma certification system.",
    details:
      "EduCert is a decentralized, blockchain-based degree and diploma certification system . Which will allow any user anywhere in the world to validate whether the pdf document he or she holds, relating to a degree certificate or diploma issued by a HEI, is valid.",
    image: { src: "../../images/educert.png", alt: "Educert" },
    link: "https://github.com/dmelim/EduCert",
    finished: "Finished",
    techUsed: [
      "JavaScript",
      "NodeJS",
      "Bootstrap",
      "Solidity",
      "SQLite",
      "Jquery",
    ],
  },
  {
    id: "p3",
    title: "Random Spewer Bot",
    detailsShort: "A simple discord bot that spews random quotes.",
    details:
      "This is a discord bot built in JavaScript with the discord.js library. The purpose of it is to spew random quotes. This was built as a test using discord.js.",
    image: {
      src: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2021/04/discord-april-fools.jpg",
      alt: "Random Spewer Bot",
    },
    link: "https://github.com/dmelim/random-spewer-bot",
    finished: "Finished",
    techUsed: ["JavaScript", "NodeJS", "Discord.JS"],
  },
  {
    id: "p4",
    title: "Pokerole bot",
    detailsShort: "A discord bot helper for Pokerole RP",
    details:
      "A discord bot helper for Pokerole RP. This is a discord bot built in JavaScript with the discord.js library. The purpose of it is to help in a Pokérole Project campaign. To run the JS files I use NodeJS. You need to create a dotenv file (.env) and store some private information. To understand it better I suggest this tutorial. For a more up-to-date tutorial, it's the official guide for discord.js.Run the deploy commands file once, and the main.js every time you want to run the bot on your nodeJS server, it will keep on running, till you close it.",
    image: {
      src: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2021/04/discord-april-fools.jpg",
      alt: "Pokerole bot",
    },
    link: "https://github.com/dmelim/Pokerole-bot",
    finished: "Finished",
    techUsed: ["JavaScript", "NodeJS", "Discord.JS"],
  },
  {
    id: "p5",
    title: "Pokemon Card Game",
    detailsShort:
      "A Pokemon card game, played against a computer, using the pokemon types.",
    details:
      "This is a project which I am planning to develop. Based on the pokemon games. I will use the pokemon types' weaknesses and strengths as a mechanism to decide a victor between two pokemon.",
    image: {
      src: "https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png",
      alt: "Pokemon Card Game",
    },
    link: "",
    finished: "Working on",
    techUsed: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS"],
  },
];

export const finishedPrj = (prjState: Project["finished"]) =>
  ProjectList.filter((project) => project.finished === prjState);

export const filterID = (id: string) =>
  ProjectList.filter((project) => project.id === id);
