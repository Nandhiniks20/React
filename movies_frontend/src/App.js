import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
function App() {
  const url = 'http://127.0.0.1:8000/movies/?format=json';
    const [data, setdata]= useState([]);
    // fetching data from api starts
    const fetchinfo=()=>{
        return axios.get(url).then((res)=>setdata(res.data));       
    };
    // fetching data from api ends
    useEffect(()=>{
        fetchinfo();
    },[]);
    return(
        <>
        <div className="alldata" style={{backgroundColor:'pink'}}>
        <div style={{fontSize:"50px",color:'purple'}}>Fetching data from the django framework api and those data are saved into postgresql</div>
        <br></br>
        <table className="tables">
            <tr style={{backgroundColor:'lightpink',}}>  
            <th><h2>Movie_name</h2></th>
            <th><h2>Des</h2></th>
           
            </tr>
            <tr>
                <td>
            {data.map((dataObj)=>{
                    return(
                        <tr>{dataObj.movie_name}</tr>
                    )
                })}
                </td>
                <td>
                    {data.map((dataObj)=>{
                        return(
                            <tr>{dataObj.des}</tr>
                        )
                    })}
                </td>
                </tr>
                  
        </table>
        </div>   
        </>
    )}

export default App;
