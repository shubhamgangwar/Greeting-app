import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


    let curdate = new Date();
    curdate = curdate.getHours();
    let greeting = "";

    const cssGreeting = {};

    if (curdate>=1 && curdate<12) {
      greeting = "Good Morning";
      cssGreeting.color="green";
      }  
    else if(curdate>=12 && curdate<19){
      greeting = "Good Afternoon";
      cssGreeting.color="orange";
    }  
    else {
      greeting = "Good Night";
      cssGreeting.color="#4a312f";
    }

    let heading = {
      color : "red",
      
    };

ReactDOM.render(
  <>
   <div className="css">
      <h1 style={heading}>Hello Sir , <span style={cssGreeting}>{greeting}</span>
      </h1>
      <p>&#128522; &#128522;</p>
   </div>
  </>,
  document.getElementById("root")
);

