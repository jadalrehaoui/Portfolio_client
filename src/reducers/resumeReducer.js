import {FETCH_RESUME} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_RESUME:
      return action.payload || false;
    default:
      return state;
  }

}
