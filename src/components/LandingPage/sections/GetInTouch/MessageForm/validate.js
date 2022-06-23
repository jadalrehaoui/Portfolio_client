export default (values) => {
  const errors = {};
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
