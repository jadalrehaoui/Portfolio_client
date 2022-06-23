import React from 'react';
import CMSButton from '../../../CMS/CMSButton';
import {BUCKET_URI} from '../../../../config';
export default ({info}) => {
  const cms_layout = {
    title: "Personal Info",
    api: 'updateInfo',
    fields: [
      {name: "Full Name", id: "full_name", type: "text", value: info.full_name},
      {name: "Title", id: "title", type: "text", value: info.title},
      {name: "Age", id: "age", type: 'text', value: info.age},
      {name: "Phone number", id: "phone_number", type: "text", value: info.phone_number},
      {name: "Email", id: "email", type: "text", value: info.email},
      {name: "Address", id: "address", type: "text", value: info.address},
      {name: "About me", id: "about_me", type: 'textarea', value: info.about_me},
      {name: "Display Picture", id: "display_picture", type: "file", value: ""}
    ]
  };
  return (
    <header className="main-header"
      style={{ backgroundImage: "url("+process.env.PUBLIC_URL+ "/assets/img/img_bg_header.jpg)" }}>
      <div className="container">
        <div className="row personal-profile">
          <div className="col-md-4 personal-profile__avatar">
            <img className="" src={BUCKET_URI + info.display_picture} alt="avatar"/>
          </div>
          <div className="col-md-8">
            <p className="personal-profile__name">{info.full_name+"_"}</p>
            <p className="personal-personal-profile__work">{info.title}</p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd> {info.age} </dd>
                <dt>Phone:</dt>
                <dd>
                  <a href={"tel:"+info.phoneNumber}>{info.phone_number}</a>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <a href={"mailto:"+info.email}>{info.email}</a>
                </dd>
                <dt>Address:</dt>
                <dd> {info.address}</dd>
              </dl>
            </div>
            <p className="personal-profile__social">
             {
               info.social_links.map((item, i) => {
                 return <a key={"header-social-"+i} href={item.link} target="_blank"><i className={"fa fa-"+item.media}></i></a>
               })
             }
            </p>
          </div>
        </div>
      </div>
      <CMSButton btn_text="Edit" layout={cms_layout} />
    </header>
  )
}
