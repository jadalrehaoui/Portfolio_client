import React from 'react';
import CMSButton from '../../../CMS/CMSButton';

export default ({skills}) => {
  const skillsCopy = [...skills];
  var middle = skills.length / 2;
  var splittedSkills = [skillsCopy.splice(0, middle), skillsCopy.splice(-middle)];
  const cms_layout = {
    title: "Add a skill",
    api: 'addSkill',
    fields: [
      {name: "Skill name", id: "name", type: "text" },
      {name: "Percentage", id: "percentage", type: "text"},
    ]
  };
  return (
    <div className="row section__resume progress-list js-progress-list">
      <div className="col-md-12">
        <h3 className="progress-list__title">general skills</h3>
        <CMSButton btn_text="Add" layout={cms_layout} />
      </div>

      {
        splittedSkills.map((skillList, i) => {
          return <div key={"skill-set-"+i} className="col-md-5 mr-auto">
            {
              skillList.map((skill, i) => {
                return <div key={"skill-"+i} className="progress-list__skill">
                  <p>
                    <span className="progress-list__skill-title">{skill.name}</span>
                    <span className="progress-list__skill-value">{skill.percentage}%</span>
                  </p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100" >
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        })


      }

    </div>
  )

}
