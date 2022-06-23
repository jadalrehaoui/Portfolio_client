import React, { Component } from 'react';
import MainForm from './MainForm';
import * as actions from '../../../../../actions';
import { connect } from 'react-redux';
class MessageForm extends Component {
  render(){
    if(!this.props.message){
      return <MainForm />
    } else {
      console.log("Message filled");
      const that = this;
      setTimeout(function () {
        console.log("Message emptied");
        that.props.emptyMessage()
      }, 3000);
      return <h4 className="center">Thank you ! I will reply ASAP.</h4>
    }
  }
}

function mapStateToProps(state){
  return {message: state.message}
}
export default connect(mapStateToProps, actions)(MessageForm);
