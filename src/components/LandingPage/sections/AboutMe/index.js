import React from 'react';
import Filled from './Filled';
import Shimmered from './Shimmered';
export default ({about_me}) => {
  if(about_me){
    return <Filled about_me={about_me} />
  } else {
    return <Shimmered />
  }
}
