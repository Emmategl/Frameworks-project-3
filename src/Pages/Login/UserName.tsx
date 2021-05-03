import React from "react";
import { Link } from "react-router-dom";
import '../style.css';

function Name() {
    return <p>Welcome you are already logged in</p>
  }
  

function UserName() {
    return (
        <p>Welcome {Name()}</p>
    );
  }

  export default UserName;
