import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
class NavBar extends Component {
  renderUserOrLogin(){
    // this.props.authentication
    if(this.props.authentication){
      return <li><a onClick={() => this.props.logoutUser()}>Logout</a></li>;
    } else {
      return <li hidden><a onClick={() => this.props.showModal("login")} data-toggle="modal" data-target="#portfolioModal">Login</a></li>
    }
  }
  render(){
    return (
      <>
        <div className="menu">
          <div className="container">
            <div className="row">
              <div className="menu__wrapper d-none d-lg-block col-md-12">
                <nav>
                  <ul>
                    <li><a href="#hello">Hello</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {this.renderUserOrLogin()}
                  </ul>
                </nav>
              </div>
              <div className="menu__wrapper col-md-12 d-lg-none">
                <button type="button" className="menu__mobile-button">
                  <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu d-lg-none">
          <div className="container">
            <div className="mobile-menu__close">
              <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
            </div>
            <nav className="mobile-menu__wrapper">
              <ul>
                <li><a href="#hello">Hello</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">testimonials</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a>close</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps(state){
  return {authentication: state.authentication}
}
export default connect(mapStateToProps, actions)(NavBar);
