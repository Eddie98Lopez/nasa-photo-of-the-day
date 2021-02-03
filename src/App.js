import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

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
    <div className="App">
     
     <div className='info-container'>
     <h1>Nasa Photo of the Day</h1>
      
      <h2>{nasaData.title}</h2>
      <p>
        {nasaData.explanation}
      </p>
      <p>copyright {nasaData.copyright} {nasaData.date}</p>
     </div>

     <div className='imgContainer'><img src={nasaData.url} alt={nasaData.title}/>
</div>

    </div>
  );
}

export default App;
