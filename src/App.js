import React , { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import ImgContainer from './ImgContainer'
import styled from 'styled-components'

const WrapperDiv = styled.div`


margin:auto;
width:50%;
background-color: #2B4476;
padding: 4rem;
border-radius: 50px;
text-align: left;
color: white;

`


function App() {

const [nasaData,setNasaData]=useState({})
  
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=L2P2qWk6oOc8g4rInpgKf20mW416HkYziiBVz3eV&date=2020-11-20')
      .then(res => {
        
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => console.log(err,'error message brosky'))
  },[])


  return (


    <div className="App">


     <h1>NASA Photo of the Day</h1>

    <WrapperDiv>
     <ImgContainer stuff={nasaData}/>
     </WrapperDiv>
    </div>


  );


}

export default App;
