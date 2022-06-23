import React from 'react';
import Education from './Education';
import Employment from './Employment';
import Skills from './Skills';
import CMSButton from '../../../CMS/CMSButton';
export default ({resume, skills}) => {
  const cms_layout = {
    title: "Resume intro",
    api: 'updateResumeIntro',
    fields: [
      {name: "Introduction", id: "intro", type: "textarea", value: resume.intro},
      {name: "Resume file", id: "resume_file", type: "file", value: ""}
    ]
  };
  return (
    <section id="resume" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="resume_header" className="section__title">Resume_</h2>
          <p className="section__description">
            {resume.intro}
          </p>

          <CMSButton btn_text="Edit" layout={cms_layout} />
        </div>
      </div>
      <Education education={resume.education} />
      <Employment employment={resume.employment} />
      <Skills skills={skills} />
    </section>
  )
}

// <SkillSet skillsets={skills} />
