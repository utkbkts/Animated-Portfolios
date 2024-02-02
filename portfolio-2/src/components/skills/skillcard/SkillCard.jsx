import React from 'react'
import "../skills.scss"
const SkillCard = ({title,iconUrl,isActive,onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active":""}`} onClick={()=>onClick()}>
      <div className="skill-icons">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  )
}

export default SkillCard
