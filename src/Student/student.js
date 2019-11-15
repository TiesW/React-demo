import React from 'react';

const student = (props)=>{
   return <div>
<h1>Dit is een student.</h1>
<h2></h2>
<h2>En mijn studie is {props.studie} </h2>
<h3>Ik ben {props.afgestudeerd} afgestudeerd.</h3>
<h4>{props.children}</h4>
   </div>
}

export default student;