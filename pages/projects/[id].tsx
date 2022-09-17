import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import ProjectInfo from "../../components/Projects/ProjectInfo";
import { ProjectList } from "../../components/Projects/ProjectsList";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Fragment>
      <Navbar />
      {ProjectList.filter((project) => project.id === id).map((project) => (
        <ProjectInfo
          key={project.id}
          title={project.title}
          image={project.image.src}
          alt={project.image.alt}
          projectLink={project.link}
          details={project.details}
          detailsShort={project.detailsShort}
        />
      ))}
    </Fragment>
  );
};

export default Project;
