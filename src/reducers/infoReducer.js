import {FETCH_INFO} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_INFO:
      return action.payload || false;
    default:
      return state;
  }
}
