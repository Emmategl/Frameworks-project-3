
import React from "react";
import construction from "../../Images/Construction/Construction.gif";
import './Construction.css';

function UnderConstruction() {

    return (
        <div>
        <h1>Page is under construction...</h1>
        <img id = "gif" src={construction} alt="Website is under construction"></img>
        </div>
      );
  }
  export default UnderConstruction