import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../../Images/Homepage/Coffee.jpg";
import pic2 from "../../../Images/Homepage/Tea.jpg";

function TopPicture() {
    return (
      <div className="rowPicture">
          <div className="column1">
          </div>
          <div className="column2">
          <Link to='/coffees'> <img src={pic1} id="frontPictures" alt="Coffee" /></Link> 
          </div>
          <div className="column3">
          <Link to='/teas'> <img src={pic2} id="frontPictures" alt="Tea" /></Link> 
          </div>
          <div className = "column4">
          </div>
      </div>
    );
  }

  export default TopPicture;


