import React from 'react';
import CMSButton from '../../../CMS/CMSButton';
import {BUCKET_URI} from '../../../../config';
export default ({about_me}) => {
  const cms_layout ={
    title: "About me",
    api: 'updateAboutMe',
    fields: [
      {name: "Paragraph", id: "paragraph", type: "textarea", value: about_me.paragraph},
      {name: "Resume file", id: 'resume_file', type: 'file'}
    ]
  }
  return (
    <section id="hello" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="hello_header" className="section__title">Hi_</h2>
          {
              <p className="section__description">
                {about_me.paragraph}
              </p>
          }
          <a href={BUCKET_URI + about_me.resume_file} className="section_btn site-btn" download>
            <img src="assets/img/img_btn_icon.png" alt=""/>
            Download CV
          </a>
          <CMSButton btn_text="Edit" layout={cms_layout} />
        </div>
      </div>
    </section>
  )
}
