import { StaticImageData } from "next/image";
import portfolioPic from "../../public/personalPorfolio.png";
import educertPic from "../../public/educert.png";

export type Project = {
  id: string;
  title: string;
  detailsShort: string;
  details: string;
  link: string;
  image: { src: string | StaticImageData; alt: string };
  finished: "Finished" | "Working on";
};

export const ProjectList: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    detailsShort: "My personal portfolio project.",
    details: "",
    image: {
      src: portfolioPic,
      alt: "Portfolio Website",
    },
    link: "https://github.com/dmelim/dm-portfolio",
    finished: "Finished",
  },
  {
    id: "p2",
    title: "Educert",
    detailsShort:
      "EduCert is a decentralized, blockchain-based degree and diploma certification system.",
    details: "",
    image: { src: educertPic, alt: "Educert" },
    link: "https://github.com/dmelim/EduCert",
    finished: "Finished",
  },
  {
    id: "p3",
    title: "Random Spewer Bot",
    detailsShort: "A simple discord bot that spews random quotes.",
    details: "",
    image: {
      src: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2021/04/discord-april-fools.jpg",
      alt: "Random Spewer Bot",
    },
    link: "https://github.com/dmelim/random-spewer-bot",
    finished: "Finished",
  },
  {
    id: "p4",
    title: "Pokerole bot",
    detailsShort: "A discord bot helper for Pokerole RP",
    details: "",
    image: {
      src: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2021/04/discord-april-fools.jpg",
      alt: "Pokerole bot",
    },
    link: "https://github.com/dmelim/Pokerole-bot",
    finished: "Finished",
  },
  {
    id: "p5",
    title: "Pokemon Card Game",
    detailsShort:
      "A Pokemon card game, played against a computer, using the pokemon types. ",
    details: "",
    image: {
      src: "https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png",
      alt: "Pokemon Card Game",
    },
    link: "https://github.com/dmelim/dm-portfolio",
    finished: "Working on",
  },
];
