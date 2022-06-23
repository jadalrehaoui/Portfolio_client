import React from 'react';
import Filled from './Filled';
import Shimmered from './Shimmered';
export default ({resume}) => {
  if(resume !== null){
    return <Filled resume={resume} skills={resume.skills}/>;
  } else {
    return <Shimmered />
  }

}




// console.log(resume.skills, "GOT SKILLS");
// const halfPoint = Math.ceil(skills.length / 2);
// console.log(halfPoint, "HALFPOINT");
// const firstSet = skills.splice(0, halfPoint);
// console.log(firstSet, "FIRSTSET");
// const secondSet = skills.splice(-halfPoint);
// console.log(secondSet, "SECONDSET");
// const splittedSkills = [firstSet, secondSet];
// console.log(skills, "SKILLS");
