import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'


/* ----------------------------STYLING------------------------------------ */

const AppDiv = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  color: white;
  height: 100vh;
`

const InfoContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;

  p{
    font-size: 0.87rem;
  color: rgb(158, 158, 158);

  }
`

const ImgContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;

img{
  margin: auto;
  width: 80%;
}

iframe{
  width:80%;
  height: 500px;
}
`



/* ----------------------------------CODE------------------------------------- */

function App() {

  const [nasaData, setNasaData] = useState({})

  useEffect(()=>{
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res=>{
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err=>console.log(err))
  },[])


  return (

  <AppDiv>
     
    <InfoContainer>
      <h1>Nasa Photo of the Day</h1>
      <h2>{nasaData.title}</h2>
      <p>{nasaData.explanation}</p>
      <p>copyright {nasaData.copyright} {nasaData.date}</p>
    </InfoContainer>

    <ImgContainer>
        {nasaData.mediatype = 'video' ? <iframe title = {nasaData.title} src={nasaData.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={nasaData.url} alt={nasaData.title}/>}
    </ImgContainer>

  </AppDiv>
  );
}

export default App;
