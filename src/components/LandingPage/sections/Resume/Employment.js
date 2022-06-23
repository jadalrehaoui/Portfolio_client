import React from 'react';
import CMSButton from '../../../CMS/CMSButton';
export default ({employment}) => {
  const cms_layout = {
    title: "Add an employment",
    api: 'addEmployment',
    fields: [
      {name: "Company Name", id: "company_name", type: "text" },
      {name: "Position", id: "position", type: "text"},
      {name: "Description", id: "description", type: "text"},
      {name: "Company website", id: "company_website", type: "text"},
      {name: "Date started", id: "date_started", type: "text"},
      {name: "Date ended", id: "date_ended", type: "text"}
    ]
  };
  return (
    <div className="row">
      <div className="col-md-8 section__resume resume-list">
        <h3 className="resume-list_title">employment</h3>
        {
          employment.map((employment, i) => {
            return (
              <div key={"employment-"+i} className="resume-list__block">
                <p className="resume-list__block-title">{employment.company_name}</p>
                <p className="resume-list__block-date">{employment.date_started.split("-")[0]} - {employment.date_ended.split("-")[0]}</p>
                <p>
                  {employment.description}
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
