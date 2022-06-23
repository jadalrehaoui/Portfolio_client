import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import postscribe from 'postscribe';
const javascripts = [
    "./assets/js/jquery-2.2.4.min.js",
    "./assets/js/popper.min.js",
    "./assets/js/bootstrap.min.js",
    "./assets/js/menu.js",
    "./assets/js/jquery.waypoints.js",
    "./assets/js/progress-list.js",
    "./assets/js/section.js",
    "./assets/js/portfolio-filter.js",
    "./assets/js/mobile-menu.js",
    "./assets/js/mbclicker.min.js",
    "./assets/js/site-btn.js",
    "./assets/js/style-switcher.js"
  ];

class App extends Component {
  componentDidMount(){
    javascripts.forEach((item, i) => {
      postscribe('#root', "<script src=\""+ item + "\"></script>");
    });
  }
  render(){
      return (
        <>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
              </Routes>
          </BrowserRouter>
        </>
      )
  }
}



export default App; // null is to mapStateToProps and the other is actions
