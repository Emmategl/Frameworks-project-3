
import React from "react";
import { Wrapper } from "../../App.styles";
import construction from "../../Images/Construction/Construction.gif";

function UnderConstruction() {

    return (
        <Wrapper>
        <h1>Page is under construction...</h1>
        <img id = "gif" src={construction} alt="Website is under construction"></img>
        </Wrapper>
      );
  }
  export default UnderConstruction