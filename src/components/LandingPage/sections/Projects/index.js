import React from 'react';
import Filled from './Filled';
import Shimmered from './Shimmered';
export default ({projects}) => {
  if(projects){
    const pairs = new Map();
    const projectTypes = [];
    projects.map((project, i) => {
      if(!pairs.has(project.type)){
        pairs.set(project.type);
        projectTypes.push(project.type);
      }
    })

    return <Filled projects={projects} types={projectTypes}/>

  } else {
    return <Shimmered />
  }

}
