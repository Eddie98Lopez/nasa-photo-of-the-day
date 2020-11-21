import React , { useState, useEffect } from "react";
import styled from 'styled-components'

function ImgContainer(props) {



    return(

      <div>
          
        
        <img style={{width:"100%",height:"auto",margin:"auto",textAlign:"center"}} src={props.stuff.url}/>


        <h2>{props.stuff.title}</h2>
        <p>{props.stuff.explanation}</p>
        <p>{props.stuff.date}</p>


      </div>

    )



  
  };

  export default ImgContainer;