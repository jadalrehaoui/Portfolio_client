import * as _ from 'lodash';
export default (values, fields) => {
  const errors = {};
  // _.forEach(values, (value, key) => {
  //   if(!values[key]){
  //     console.log(key + "is empty");
  //     errors.key = key + " must not be empty."
  //   }
  // })
  if(!values.name){
    errors.name = "You must provide a name.";
  }
  if(!values.email){
    errors.email = "You must provide a valid e-mail.";
  }
  if(!values.content){
    errors.content = "You must type a message.";
  }
  return errors;
}
