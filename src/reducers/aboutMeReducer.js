import {FETCH_ABOUT_ME} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_ABOUT_ME:
      return action.payload || false;
    default:
      return state;
  }
}
