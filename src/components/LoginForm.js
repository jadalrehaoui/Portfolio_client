import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import Text from './CMS/Inputs/Text';
class LoginForm extends Component {
  render(){
    return (
      <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
        <p className="portfolio-modal__title">LOGIN</p>
        <div className="col-md-12">
          <form
            encType="multipart/form-data"
            onSubmit={this.props.handleSubmit(
              () => this.props.loginUser(this.props.form.login_form.values) // passing function name as prop
            )}>
            <Field label="username" placeholder="username" name="username" type="text" component={Text}/>
            <Field label="Password" placeholder="Password" name="password" type="password" component={Text}/>
            <button type="submit" aria-label="Close">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {form: state.form}
}
LoginForm = connect(mapStateToProps, actions)(LoginForm);

export default reduxForm({form: 'login_form'})(LoginForm);
