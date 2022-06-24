import axios from 'axios';
import * as types from './types';
const api_uri = "http://localhost:4000";

export const fetchInfo = () => async (dispatch) => {
  const res = await axios.get(api_uri+'/api/public/personal-info');
  dispatch({type: types.FETCH_INFO, payload: res.data});
}
export const fetchResume = () => async (dispatch) => {
  const res = await axios.get(api_uri+'/api/public/resume');
  dispatch({type: types.FETCH_RESUME, payload: res.data});
}
export const fetchProjects = () => async (dispatch) => {
  const res = await axios.get(api_uri+'/api/public/projects');
  dispatch({type: types.FETCH_PROJECTS, payload: res.data});
}
export const postMessage = (message) => async (dispatch) => {
  const res = await axios.post(api_uri+'/api/public/get-in-touch', message);
  dispatch({type: types.POST_MESSAGE, payload: res}); // because i need to see if the status is 200
}

export const fetchAboutMe = () => async (dispatch) => {
  const res = await axios.get(api_uri+'/api/public/about-me');
  dispatch({type: types.FETCH_ABOUT_ME, payload: res.data});
}
