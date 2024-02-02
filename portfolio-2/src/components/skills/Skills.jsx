import React, { useState } from "react";
import { SKILLS } from "../../utils/data";
import SkillCard from "./skillcard/SkillCard";
import "./skills.scss"
import SkillsInfoCard from "./skillsInfoCard/SkillsInfoCard";
const Skills = () => {
  const [selectedSkill,setSelectedSkills]=useState(SKILLS[0])

  const handleSelectSkills=(data)=>{
    setSelectedSkills(data)
  }
  return (
    <div className="skills-container">
      <h5 className="skills-wrapper">Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={()=>{handleSelectSkills(item)}}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
