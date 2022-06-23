import React from 'react';
import Shimmer from 'react-js-loading-shimmer';
export default () => {
  return (
    <section id="hello" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="hello_header" className="section__title">Hi_</h2>
          {
              <p className="section__description">
                <Shimmer/>
              </p>
          }
          <a href="/https://github.com/jadalrehaoui/CPP_COURSE/archive/refs/heads/main.zip" className="section_btn site-btn" download>
            <img src="assets/img/img_btn_icon.png" alt=""/>
            <Shimmer/>
          </a>
        </div>
      </div>
    </section>
  )

}
