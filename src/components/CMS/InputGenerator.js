import React from 'react';
import { Field } from 'redux-form';
import Text from './Inputs/Text';
import TextArea from './Inputs/TextArea';
import MultiText from './Inputs/MultiText';
import File from './Inputs/File';
import Id from './Inputs/Id';
export default ({input}) => {
  switch(input.type){
    case 'text' || 'email':
      return <Field id={"cms-form-field-id" + input.id} label={input.name} placeholder={input.value ? input.value : input.name} name={input.id} type="text" component={Text}/>;
    case 'textarea':
      return <Field id={"cms-form-field-id" + input.id} label={input.name} placeholder={input.value ? input.value : input.name} name={input.id} type="text" component={TextArea}/>;
    case 'id':
      return <Field id={"cms-form-field-id" + input.id} label={input.name} placeholder={input.value ? input.value : input.name} name={input.id} type="text" component={Id}/>;
    case 'multitext':
      return <Field id={"cms-form-field-id" + input.id} label={input.name} values={input.values} display={input.value_shown} name={input.id} type="text" component={MultiText}/>;
    case 'file':
      return <Field id={"cms-form-field-id" + input.id} label={input.name} placeholder={input.value ? input.value : input.name} name={input.id} type="file" component={File}/>
    default:
      return <p style={{color: 'red'}}>You need to build a field for this type, {input.type}</p>
  }
}
