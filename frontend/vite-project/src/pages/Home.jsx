import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import API_URL  from '../../config/global';
const Home = ()=>{
    const [res,setRes] = useState({ })
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if(user && user.token){
            getData(user.token)
        }
    }, [])

    const getData = async (token)=>{
        try {
            const config = {
                headers: {
                    Authorization:token
                }
            }
            const response = await axios.post(`${API_URL}/home`, config);
            if(response.data == "Invalid Token "){
                alert("login again")
            }else if(response.data==="Server Busy"){
                alert("unauthorized access")
            }else if(response?.status){
                setRes(response.data)
            }
        } catch (error) {
            
        }
    }

    return(
        <Container>
            <h1>Welcome to our website</h1>
            <p>We are here to serve you</p>
            <p>{res.name}</p>
            <Button variant='primary' type='text' >Get Started</Button>
        </Container>
    )
}
export default Home;