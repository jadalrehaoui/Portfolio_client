import { combineReducers } from 'redux';
import infoReducer from './infoReducer';
import aboutMeReducer from './aboutMeReducer';
import resumeReducer from './resumeReducer';
import projectReducer from './projectReducer';
import messageReducer from './messageReducer';
import modalReducer from './modalReducer';
import authenticationReducer from './authenticationReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  info: infoReducer,
  about_me: aboutMeReducer,
  resume: resumeReducer,
  projects: projectReducer,
  form: formReducer,
  message: messageReducer,
  modal: modalReducer,
  authentication: authenticationReducer,
})
