import React from 'react';
import Filled from './Filled';
import Shimmered from './Shimmered';
export default ({info, update_api}) => {
  if(info){
    return <Filled info={info}/>
  } else {
    return <Shimmered />
  }

}
