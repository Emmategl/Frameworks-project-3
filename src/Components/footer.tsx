import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../Images/Homepage/Coffee.jpg";
import pic2 from "../Images/Homepage/Tea.jpg";
import '../Pages/style.css';
import './footer.css';

function Footer() {
    return (
        <footer>
        <div className="footer">
            <div className="navigation">
              <h5>Navigation</h5>
              <a href="index.html"><p>Homepage</p></a>
              <a href="allProducts.html"><p>All products</p></a>
              <a href="coffeeProducts.html"><p>Coffee</p></a>
              <a href="teaProducts.html"><p>Tea</p></a>
              <a href="basket.html"><p>Basket</p></a>
              <a href="login.html"><p>Login</p></a>
            </div>
            <div className="information">
              <h5>Information</h5>
              <p>Delivery information</p>
              <p>Returns</p>
              <p>Cookie policy</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="contact">
              <h5>Contact us</h5>
              <p>Adress: Coffee Street 24, Copenhagen</p>
              <p>Phone: +45 34 34 35 35</p>
            </div>
            <div className="social">
              <h5>Social media</h5>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
        </div>
    </footer>
    );
  }

  export default Footer;

