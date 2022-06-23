import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import CustomField from './CustomField';
import validate from './validate';
class MainForm extends Component {
  render() {
    return (
      <div className="contacts__form">
        <p className="contacts__form-title">Or just write me a letter here_</p>
        <form
          onSubmit={
            this.props.handleSubmit(
              () => this.props.postMessage(this.props.form.contact_me_form.values)
            )
          }>
          <Field placeholder="Your name" name="name" type="text" component={CustomField}/>
          <Field placeholder="Your e-mail" name="email" type="text" component={CustomField}/>
          <Field placeholder="Type the message here" name="content" type="text" component={CustomField}/>
          <button className="site-btn site-btn--form" type="submit">Send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {form: state.form}
}

MainForm = connect(mapStateToProps, actions)(MainForm); // wrapping with connect

export default reduxForm({
  validate: validate,
  form: 'contact_me_form'
})(MainForm); // wrapping with redux form
