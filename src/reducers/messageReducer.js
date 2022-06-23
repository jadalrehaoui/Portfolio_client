import {POST_MESSAGE} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case POST_MESSAGE:
      if (action.payload == null){
        return "";
      } else if(action.payload.status == 200){
        return "Thanks ! I will reply ASAP !";
      } else {
        return "Please try again later."
      }
    default:
      return state;
  }

}
