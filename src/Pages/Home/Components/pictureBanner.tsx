import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../../Images/Homepage/Farmer.jpg";
import pic2 from "../../../Images/Homepage/Flavours.jpg";
import pic3 from "../../../Images/Homepage/Retailer.jpg";
import pic4 from "../../../Images/Homepage/World.jpg";

function PictureBanner() {
    return (
        <div className="rowBanner">
            <div className="colmn">
                <Link to='/coffees'> <img id="newprod" src={pic1} alt="Hot Liquids" /></Link>
            </div>
            <div className="colmn">
            <Link to='/teas'> <img id="newprod" src={pic2} alt="Hot Liquids" /></Link>
            </div>
            <div className="colmn">
            <Link to='/coffees'> <img id="newprod" src={pic3} alt="Hot Liquids" /></Link>
            </div>
            <div className="colmn">
                <Link to='/teas'> <img id="newprod" src={pic4} alt="Hot Liquids" /></Link>
            </div>
      </div>
      
    );
  }

  export default PictureBanner;
