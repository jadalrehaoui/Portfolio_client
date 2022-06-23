import React from 'react';
import Shimmer from 'react-js-loading-shimmer';
export default () => {
  return (
    <header className="main-header"
      style={{ backgroundImage: "url("+process.env.PUBLIC_URL+ "/assets/img/img_bg_header.jpg)" }}>
      <div className="container">
        <div className="row personal-profile">
          <div className="col-md-4 personal-profile__avatar">
            <img className="" src="http://via.placeholder.com/350x400" alt="avatar"/>
          </div>
          <div className="col-md-8">
            <p className="personal-profile__name"><Shimmer/></p>
            <p className="personal-personal-profile__work"><Shimmer/></p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd><Shimmer/></dd>
                <dt>Phone:</dt>
                <dd>
                  <Shimmer/>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <Shimmer/>
                </dd>
                <dt>Address:</dt>
                <Shimmer/>
              </dl>
            </div>
            <p className="personal-profile__social">
             <Shimmer/>
            </p>
          </div>
        </div>
      </div>
        <button className="cms-section-button ">EDIT</button>
    </header>
  )

}
