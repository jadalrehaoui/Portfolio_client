import axios from 'axios';
import * as types from './types';
import * as _ from 'lodash';
const api_uri = "http://localhost:4000";
const cors = {
  withCredentials: true,
  credentials: 'include',
  headers: {
    'Content-Type': 'multipart/form-data',
  }
}

export const updateInfo = (info, id = null) => async (dispatch) => {
  const res = await axios.patch(api_uri+'/api/cms/personal-info',info, cors);
  dispatch({type: types.FETCH_INFO, payload: res.data}); // because we want to update the view
}
export const updateAboutMe = (about_me, id = null) => async (dispatch) => {
  const res = await axios.patch('http://localhost:4000/api/cms/about-me',about_me, cors);
  dispatch({type: types.FETCH_ABOUT_ME, payload: res.data}); // because we want to update the view
}
export const updateResumeIntro = (intro, id = null) => async (dispatch) => {
  const res = await axios.patch(api_uri+'/api/cms/resume-intro',intro);
  dispatch({type: types.FETCH_RESUME, payload: res.data}); // because we want to update the view
}



export const addEducation = (education, id = null) => async (dispatch) => {
  const res = await axios.post(api_uri+'/api/cms/add-education', education);
  dispatch({type: types.FETCH_RESUME, payload: res.data}); // because we want to update the view
}

export const addEmployment = (employment, id = null) => async (dispatch) => {
  const res = await axios.post(api_uri+'/api/cms/add-employment', employment);
  dispatch({type: types.FETCH_RESUME, payload: res.data}); // because we want to update the view
}
export const addSkill = (skill) => async (dispatch) => {
  const res = await axios.post(api_uri+'/api/cms/add-skill', skill);
  dispatch({type: types.FETCH_RESUME, payload: res.data}); // because we want to update the view
}

export const addProject = (project, id = null) => async (dispatch) => {
  const res = await axios.post(api_uri+'/api/cms/add-project', project, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  if(res.data){
    const res = await axios.get(api_uri+'/api/public/projects');
    dispatch({type: types.FETCH_PROJECTS, payload: res.data}); // because we want to update the view
  } else {
    dispatch({type: types.FETCH_PROJECTS, payload: null});
  }
}
export const updateProject = (project = {}, id = null) => async (dispatch) => {
  if('stack_items' in project){
    const splitted = project.stack_items.split(',');
    const stack_items = [];
    _.forEach(splitted, function(item, i) {
      stack_items.push({name: item.trim()});
    })
    project = {...project, stack_items: stack_items}
  }
  const res = await axios.patch(api_uri+'/api/cms/edit-project/'+id, project, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  if(res.data){
    const res = await axios.get(api_uri+'/api/public/projects');
    dispatch({type: types.FETCH_PROJECTS, payload: res.data}); // because we want to update the view
  } else {
    dispatch({type: types.FETCH_PROJECTS, payload: null});
  }
}

export const loginUser = (credentials) => async (dispatch) => {
  const res = await axios.post(api_uri+'/api/cms/login', credentials, {
    withCredentials: true,
    credentials: 'include',
  });
  console.log("RES", res);
  if(res.status === 200){
    dispatch({type: types.AUTHENTICATION, payload: res.data})
  } else {
    dispatch({type: types.AUTHENTICATION, payload: null});
  }

}
export const logoutUser = () => async (dispatch) => {
  const res = await axios.get(api_uri+'/api/cms/logout', cors);
  dispatch({type: types.AUTHENTICATION, payload: res.data.user})
}
