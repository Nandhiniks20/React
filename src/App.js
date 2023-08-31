import logo from './logo.svg';
import images from './images.png'
import './App.css';
import React, {Component, useState} from 'react';
const data = [
  ["React is extremely popular",
"It makes building complex, interactive UIs a breeze",
"It's powerful & flexible",
"It has a very active and versatile ecosystem"],
["Components, JSX & Props",
"State",
"Hooks (e.g., useEffect())",
"Dynamic rendering"],
[ "Official web page (react.dev)",
"Next.js (Fullstack framework)",
"React Native (build native mobile apps with React)"],
[ "Vanilla JavaScript requires imperative programming",
"Imperative Programming: You define all the steps needed to achieve a result",
"React on the other hand embraces declarative programming",
"With React, you define the goal and React figures out how to get there"]
];
const App=()=>{
  const[activeContent, setActiveContent] = useState(0);
  return(
    <div style={{ backgroundColor:'lightgreen' }}>
      <header>
        <img className='image' src={images} alt="React logo"/>
        <h1 className='para'  >It is React Project</h1>
        <p className='para'>i.e., using the React library for rendering the UI</p>
      </header>
      <div id="tabs">
        <menu>
          <button style={{backgroundColor: 'pink'}} className={activeContent===0 ? "active" : ""}
          onClick={()=>setActiveContent(0)}>Why React?</button>
          <button style={{backgroundColor: 'pink'}} className={activeContent===1 ? "active": ""}
          onClick={()=>setActiveContent(1)}>Core Features</button>
          <button style={{backgroundColor: 'pink'}} className={activeContent===2 ? "active" : ""}
          onClick={()=>setActiveContent(2)}>Related Resources</button>
          <button style={{backgroundColor: 'pink'}} className={activeContent===3 ? "active" : ""} 
          onClick={()=>setActiveContent(3)}>React vs JS</button>
        </menu>
        <div id="content">
        <ul>
         {data[activeContent].map((item)=>(
          <li>{item}</li>
         ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
