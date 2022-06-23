import React, {Component} from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';
class CMSButton extends Component {
  render(){
    if(!this.props.authentication){
      return null;
    } else {
      return (
        <button
          style={this.props.top ? {top: 'inherit'} : null}
          className="cms-section-button btn btn-outline-primary"
          onClick={() => this.props.showModal('form', this.props.layout)}
          data-target="#portfolioModal"
          data-toggle="modal"
        >{this.props.btn_text}</button>
      )
    }
  }
}

function mapStateToProps(state){
  return {authentication: state.authentication}
}
export default connect(mapStateToProps, actions)(CMSButton);
