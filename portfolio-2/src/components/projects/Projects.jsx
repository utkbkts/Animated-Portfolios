import React from "react";
import "./projects.scss";
import ProjectCard from "./projectCard/ProjectCar";
import { CategoryList } from "../../utils/data";
const Projects = () => {

  return (
    <div className="Projects-wrapper">
      <h6>Projects</h6>
      <div className="wrapper">
        {CategoryList.map((item) => (
          <ProjectCard
            key={item.title}
            category={item.category}
            createdAt={item.createdBy}
            date={item.date}
            title={item.title}
            image={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
