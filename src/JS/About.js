import React from 'react';
import './CSS/App.css';

function AnEmployee(props){
   return (
     <div>
       {props.name}<br/>
       {props.description}
     </div>
   )
}

const Employees = [
  {name:'Bob', description:'The builder'},
  {name:'Pat', description:'Pat'}
];
const ShowEmployees = Employees.map(e => { return <AnEmployee name={e.name} description={e.description}/>})

function About() {
  return (
    <div>
        <h1>About Page</h1>
        <h2>Hello</h2>
        <p>
          {ShowEmployees}
        </p>
    </div>
  );
}

export default About;
