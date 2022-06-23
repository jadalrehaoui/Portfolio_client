import React from 'react';
import CMSButton from '../../../CMS/CMSButton';
export default ({education}) => {
  const cms_layout = {
    title: "Add an education",
    api: 'addEducation',
    fields: [
      {name: "Education", id: "intro", type: "text" },
      {name: "Certificate", id: "certificate", type: "text"},
      {name: "Institute", id: "institute", type: "text"},
      {name: "Date started", id: "date_started", type: "text"},
      {name: "Date ended", id: "date_ended", type: "text"}
    ]
  };
  return (
    <div className="row">
      <div className="col-md-8 section__resume resume-list">
        <h3 className="resume-list_title">education</h3>
        {
          education.map((education, i) => {
            return (
              <div key={"eduction"+i} className="resume-list__block">
                <p className="resume-list__block-title">{education.institute}</p>
                <p className="resume-list__block-date">{education.date_started.split("-")[0]} - {education.date_ended.split("-")[0]}</p>
                <p>
                  {education.certificate}
                </p>
              </div>
            )
          })
        }
        <CMSButton btn_text="Add" layout={cms_layout} />
      </div>

    </div>
  )
}
