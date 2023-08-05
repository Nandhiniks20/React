// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // const myArray = ['apple', 'banana', 'orange'];
// // const myList = myArray.map((item=><h2>{item}</h2>));
// // const container = document.getElementById('root');
// // const root = ReactDOM.createRoot(container);
// // root.render(myList);
// const a = 12;
// const b = 20;
// const c = a<b;
// const d = b<a;
// const f = a ? c : d;
// if(c){
//     const container = document.getElementById('root').innerHTML= 'A is lesser than B';

//     const root = ReactDOM.createRoot(container);
//     root.render(container)
// }else{
//     const container = document.getElementById('root').innerHTML= 'A is greater than B';

// const root = ReactDOM.createRoot(container);
// root.render(container)
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const x = 5;
const b = 1;
let text = 'X is greater than b'
const myElement = <h1>{text}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);