import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import ProjectInfo from "../../components/Projects/ProjectInfo";
import { filterID } from "../../components/Projects/ProjectsList";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      {filterID(id as string).map((project) => (
        <ProjectInfo
          key={project.id}
          title={project.title}
          image={project.image.src}
          alt={project.image.alt}
          projectLink={project.link}
          details={project.details}
          detailsShort={project.detailsShort}
          techUsed={project.techUsed}
        />
      ))}
    </Fragment>
  );
};

export default Project;
