import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import NavBar from './sections/NavBar';
import Info from './sections/Info';
import AboutMe from './sections/AboutMe';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import GetInTouch from './sections/GetInTouch';
import Project from './sections/Project';
import Modal from '../Modal';
import postscribe from 'postscribe';

// const javascripts = [
//     "./assets/js/jquery-2.2.4.min.js",
//     "./assets/js/popper.min.js",
//     "./assets/js/bootstrap.min.js",
//     "./assets/js/menu.js",
//     "./assets/js/jquery.waypoints.js",
//     "./assets/js/progress-list.js",
//     "./assets/js/section.js",
//     "./assets/js/portfolio-filter.js",
//     "./assets/js/mobile-menu.js",
//     // "./assets/js/contacts.js",
//     "./assets/js/mbclicker.min.js",
//     "./assets/js/site-btn.js",
//     "./assets/js/style-switcher.js"
//   ];

class LandingPage extends Component{
  componentDidMount(){
    this.props.fetchInfo();
    this.props.fetchAboutMe();
    this.props.fetchResume();
    this.props.fetchProjects();
  }
  render(){
    return (
      <>
        <NavBar />
        <Info info={this.props.info} />
        <AboutMe about_me={this.props.about_me} />
        <Resume resume={this.props.resume} />
        <Projects projects={this.props.projects} />
        <GetInTouch info={this.props.info}/>
        <Modal />

      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    info: state.info,
    projects: state.projects,
    resume: state.resume,
    about_me: state.about_me
  }
}
export default connect(mapStateToProps, actions)(LandingPage);
