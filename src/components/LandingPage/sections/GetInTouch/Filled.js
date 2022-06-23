import React from 'react';
import MessageForm from './MessageForm';
export default ({info}) => {
  return (
    <div className="background" style={{backgroundImage: "url(assets/img/img_bg_main.jpg)"}}>
      <div id="contact" className="container section">
        <div className="row">
          <div className="col-md-12">
            <p id="contacts_header" className="section__title">Get in touch_</p>
          </div>
        </div>
        <div className="row contacts">
          <div className="col-md-5 col-lg-4">
            <div className="contacts__list">
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd>{ info.phone_number }</dd>
                <dt>Email:</dt>
                <dd>{ info.email }</dd>
              </dl>
            </div>
            <div className="contacts__social">
              <ul>
                { info.social_links.map((item, i) => {
                  return <li key={"social-footer-"+i}><a href={item.link}>{item.media.toUpperCase()}</a></li>
                }) }
              </ul>
            </div>
          </div>
          <div className="col-md-7 col-lg-5">
            <MessageForm />
            <div className="footer">
              <p>© 2020 Jad Alrehaoui. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
