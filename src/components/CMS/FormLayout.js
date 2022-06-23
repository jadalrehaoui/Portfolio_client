import React, { Component } from 'react';
import InputGenerator from './InputGenerator';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import validate from './validate';
import { reduxForm, Field } from 'redux-form';
class FormLayout extends Component {
  render(){
    console.log("PROPS", this.props);
    return (
      <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
        <p className="portfolio-modal__title">{this.props.layout.title}</p>
        <div className="col-md-12">
          <form
            encType="multipart/form-data"
            onSubmit={this.props.handleSubmit(
              () => {
                this.props[this.props.layout.api](this.props.form.cms_form.values,'has_id' in this.props.layout ? this.props.layout.id : null);
                this.props.reset();
              } // passing function name as prop
            )}>
            {
              this.props.layout.fields.map((field, i) => {
                return <InputGenerator key={'input-field-'+i} input={field}/>
              })
            }
            <button type="submit" aria-label="Close">Save</button>
          </form>
        </div>
      </div>
    )
  }
}
// this.props.updateInfo(this.props.form.info_form.values)

function mapStateToProps(state) {
  console.log(state.form, "FORM");
  return {form: state.form}
}

FormLayout = connect(mapStateToProps, actions)(FormLayout); // wrapping with connect

export default reduxForm({
  // validate: validate,
  form: "cms_form",
})(FormLayout)
