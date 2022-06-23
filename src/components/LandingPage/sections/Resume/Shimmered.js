import React from 'react';
import Shimmer from 'react-js-loading-shimmer';
export default () => {
  return (
    <section id="resume" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="resume_header" className="section__title">Resume_</h2>
          <p className="section__description">
            <Shimmer />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 section__resume resume-list">
          <h3 className="resume-list_title">education</h3>
            <div className="resume-list__block">
              <p className="resume-list__block-title"><Shimmer /></p>
              <p className="resume-list__block-date"><Shimmer /> - <Shimmer /></p>
              <p>
                <Shimmer />
              </p>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 section__resume resume-list">
          <h3 className="resume-list_title">employment</h3>
            <div className="resume-list__block">
              <p className="resume-list__block-title"><Shimmer/></p>
              <p className="resume-list__block-date"><Shimmer/> - <Shimmer/></p>
              <p>
                <Shimmer/>
              </p>
            </div>
        </div>
      </div>

      <div className="row section__resume progress-list js-progress-list">
        <div className="col-md-12">
          <h3 className="progress-list__title">general skills</h3>
        </div>
        <div className="col-md-5 mr-auto">
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 mr-auto">
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
          <div className="progress-list__skill">
            <p>
              <span className="progress-list__skill-title"><Shimmer/></span>
              <span className="progress-list__skill-value"><Shimmer/></span>
            </p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
