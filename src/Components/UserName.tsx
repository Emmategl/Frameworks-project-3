import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../Images/Homepage/Farmer.jpg";
import pic2 from "../Images/Homepage/Flavours.jpg";
import pic3 from "../Images/Homepage/Retailer.jpg";
import pic4 from "../Images/Homepage/World.jpg";
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
