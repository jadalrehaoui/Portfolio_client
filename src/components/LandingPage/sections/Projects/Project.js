import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { BUCKET_URI } from '../../../../config';
import CMSButton from '../../../CMS/CMSButton';
class Project extends Component{
  render(){
    const data = {
      description: this.props.description,
      title: this.props.title,
      stack_items: this.props.stack_items,
      link: this.props.link
    }
    const cms_layout = {
      title: "Edit Project",
      api: 'updateProject',
      has_id: true,
      id: this.props.id,
      fields: [
        {name: "Title", id: "title", type: "text", value: this.props.title},
        {name: "Description", id: "description", type: "text", value: this.props.description},
        {name: "Long Description", id: "long_description", type: "textarea", value: this.props.long_description},
        {name: "Link", id: "link", type: "text", value: this.props.link},
        {name: "Stack Used", id: "stack_items", type: "multitext", value_shown: 'name', values: this.props.stack_items},
        {name: "Picture", id: "thumbnail_file", type: "file", value: this.props.link},
      ]
    };
    return (
      <div>
      <CMSButton top="inherit" btn_text="Edit" layout={cms_layout}/>
      <div className="row project-card" onClick={() => this.props.showModal("project", data)} data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag={this.props.type}>
        <div className="col-md-6 col-lg-5 project-card__img">
          <img className="" src={BUCKET_URI + this.props.thumbnail_file} alt="project-img"/>
        </div>
        <div className="col-md-6 col-lg-7 project-card__info">
          <h3 className="project-card__title">{this.props.title}</h3>

          <p className="project-card__description">
            {this.props.description}
          </p>

          <p className="project-card__stack">Used stack:</p>
          <ul className="tags">
            {
              this.props.stack_items.map((tag, i) => {
                return (
                  <li key={"tag-"+i}>{tag.name}</li>
                )
              })
            }
          </ul>
          <a href={this.props.link} target="_blank" className="project-card__link">{this.props.link.split('//')[1]}</a>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(null, actions)(Project);
