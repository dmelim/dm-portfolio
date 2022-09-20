import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ProjectInfo from "../../components/Projects/ProjectInfo";
import { filterID, Project } from "../../components/Projects/ProjectsList";

type Props = {
  projects: Project;
};

const Project = ({ projects }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{projects.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProjectInfo
        key={projects.id}
        title={projects.title}
        image={projects.image.src}
        alt={projects.image.alt}
        projectLink={projects.link}
        details={projects.details}
        detailsShort={projects.detailsShort}
        techUsed={projects.techUsed}
      />
    </Fragment>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "p1" } },
      { params: { id: "p2" } },
      { params: { id: "p3" } },
      { params: { id: "p4" } },
      { params: { id: "p5" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const id = context.params!.id;
  const data = filterID(id as string);
  return {
    props: {
      projects: data[0],
    },
  };
};

export default Project;
