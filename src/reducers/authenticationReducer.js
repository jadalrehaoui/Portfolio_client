import {AUTHENTICATION} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case AUTHENTICATION:
      return action.payload || false;
    default:
      return state;
  }
}
