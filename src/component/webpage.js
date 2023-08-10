import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './webpage.css'
const Webpage =()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
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
        <div style={{fontSize:"50px",color:'purple'}}>Sample data fetching from api</div>
        <br></br>
        <table className="tables">
            <tr style={{backgroundColor:'lightpink',}}>  
            <th><h2>Id</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Username</h2></th>
            <th><h2>Email</h2></th>
            <th><h2>Phone</h2></th>
            <th><h2>Website</h2></th>
           
            </tr>
            <tr>
                <td>
            {data.map((dataObj)=>{
                    return(
                        <tr>{dataObj.id}</tr>
                    )
                })}
                </td>
                <td>
                    {data.map((dataObj)=>{
                        return(
                            <tr>{dataObj.name}</tr>
                        )
                    })}
                </td>
               
                <td>
                    {data.map((dataObj)=>{
                        return(
                        <tr>{dataObj.username}</tr>
                        )
                    })}
                </td>
               <td>
                {data.map((dataObj)=>{
                    return(
                        <tr>{dataObj.email}</tr>
                    )
                })}
               </td>
               <td>
                {data.map((dataObj)=>{
                    return(
                        <tr>{dataObj.phone}</tr>
                    )
                })}
               </td>
               <td>
                {data.map((dataObj)=>{
                    return(
                        <tr>{dataObj.website}</tr>
                    )
                })}
               </td>
                    </tr>     
        </table>
        </div>   
        </>
    )
}
export default Webpage;