export type Project = {
  id: string;
  title: string;
  detailsShort: string;
  details: string;
  link: string;
  image: { src: string; alt: string };
  finished: "Finished" | "Working on";
};

export const ProjectList: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    detailsShort: "My personal portfolio project.",
    details: "",
    image: { src: "", alt: "Portfolio Website" },
    link: "https://github.com/dmelim/dm-portfolio",
    finished: "Finished",
  },
  {
    id: "p2",
    title: "Educert",
    detailsShort:
      "EduCert is a decentralized, blockchain-based degree and diploma certification system.",
    details: "",
    image: { src: "", alt: "Educert" },
    link: "https://github.com/dmelim/EduCert",
    finished: "Finished",
  },
  {
    id: "p3",
    title: "Random Spewer Bot",
    detailsShort: "A simple discord bot that spews random quotes.",
    details: "",
    image: { src: "", alt: "Random Spewer Bot" },
    link: "https://github.com/dmelim/random-spewer-bot",
    finished: "Finished",
  },
  {
    id: "p4",
    title: "Pokerole bot",
    detailsShort: "A discord bot helper for Pokerole RP",
    details: "",
    image: { src: "", alt: "Pokerole bot" },
    link: "https://github.com/dmelim/Pokerole-bot",
    finished: "Finished",
  },
  {
    id: "p5",
    title: "Pokemon Card Game",
    detailsShort:
      "A Pokemon card game, played against a computer, using the pokemon types. ",
    details: "",
    image: { src: "", alt: "Pokemon Card Game" },
    link: "https://github.com/dmelim/dm-portfolio",
    finished: "Working on",
  },
];
