import React from 'react'
import "../projects.scss"

const ProjectCard = ({category,createdAt,date,title,image}) => {
  return (
    <div className="wrapper-container">
          <div className="image-wrapper">
            <img src={image} alt="" />
          </div>
          <div className="content-wrapper">
            <button>{category}</button>
            <span className="date">{date}</span>
            <p>
             {title}
            </p>
            <span className="created">createdBy:utku bektasoglu</span>
          </div>
        </div>
  )
}

export default ProjectCard
