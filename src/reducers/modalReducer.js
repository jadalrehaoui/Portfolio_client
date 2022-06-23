import {MODAL} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case MODAL:
      return action.payload || false;
    default:
      return state;
  }

}
