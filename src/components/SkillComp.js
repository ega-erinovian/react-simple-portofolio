import React from "react";

const SkillComp = (props) => {
  return (
    <div class="row skill-data">
      <div class="col-md">
        <div class="skills-names">
          <i class="skills-icon"></i>
          <span class="skills-name">{props.title}</span>
          <span class="skills-percentage">{props.percent}%</span>
        </div>
        <div class="skill-bar skills-css" style={{ width: props.percent + "%" }}></div>
      </div>
    </div>
  );
};

export default SkillComp;
