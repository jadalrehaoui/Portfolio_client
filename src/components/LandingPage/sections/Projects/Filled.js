import React, {Component} from 'react';
import Project from './Project';
import CMSButton from '../../../CMS/CMSButton';
export default ({types, projects}) => {
  const cms_layout = {
    title: "Add a project ",
    api: 'addProject',
    fields: [
      {name: "Title", id: "title", type: "text"},
      {name: "Description", id: "description", type: "text"},
      {name: "Long Description", id: "long_description", type: "textarea"},
      {name: "Type", id: "type", type: "text"},
      {name: "Link", id: "link", type: "text"},
      {name: "Picture", id: "thumbnail_file", type: "file"},
    ]
  };
  return (
    <section id="portfolio" className="container section">
      <div className="row">
        <div className="col-md-12">
          <h2 id="portfolio_header" className="section__title">My projects_</h2>
          <CMSButton btn_text="Add" layout={cms_layout}/>
        </div>
      </div>
      <div className="row portfolio-menu">
        <div className="col-md-12">
          <nav>
            <ul>
              <li><a href="" data-portfolio-target-tag="all">all</a></li>
              {
                types.map((type, i) => {
                  return (
                    <li key={"project-type-"+i}>
                      <a  href="" data-portfolio-target-tag={type}>{type}</a>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
      <div className="portfolio-cards">
        {
          projects.map((project, i) => {
            return <Project
              id={project._id}
              type={project.type}
              key={"project-"+i}
              title={project.title}
              description={project.description}
              stack_items={project.stack_items}
              thumbnail_file={project.thumbnail_file}
              link={project.link} />
          })
        }

      </div>
    </section>
  )
}
