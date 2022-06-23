import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import Project from '../LandingPage/sections/Project';
import FormLayout from '../CMS/FormLayout';
import LoginForm from '../LoginForm';
import { connect } from 'react-redux';
class Modal extends Component {
  render(){
    if(this.props.modal === null){
      return (
        <ModalWrapper/>
      )
    } else if(this.props.modal.component === 'project') {
      return (
        <ModalWrapper>
          <Project data={this.props.modal.data}/>
        </ModalWrapper>
      );
    } else if(this.props.modal.component === 'form') {
      return (
        <ModalWrapper>
          <FormLayout layout={this.props.modal.data}/>
        </ModalWrapper>
      )
    } else if(this.props.modal.component === 'login') {
      return (
        <ModalWrapper>
          <LoginForm />
        </ModalWrapper>
      )

    }
  }
}

function mapStateToProps(state){
  return {modal: state.modal}
}
export default connect(mapStateToProps)(Modal);
