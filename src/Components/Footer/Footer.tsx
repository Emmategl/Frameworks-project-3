
import {NavLink} from 'react-router-dom';


function Footer() {
    return (
        <footer>
        <div className="footer">
              <div className="navigation">
              <h5>Navigation</h5>
              <ul>
                  <li>
                    <NavLink exact activeClassName="active" to="/" >
                      Home
                    </NavLink>
                  </li>
                  <li>
                  <NavLink exact activeClassName="active" to="/allproducts" >
                  All products
                  </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/coffees">
                      Coffees
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/teas" >
                      Teas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/aboutus" >
                      About us
                    </NavLink>
                  </li>
                </ul>
                </div>
            <div className="information">
              <h5>Information</h5>
              <ul>
                  <li>
                    <NavLink exact activeClassName="active" to="/underconstruction" >
                    Delivery information
                    </NavLink>
                  </li>
                  <li>
                  <NavLink exact activeClassName="active" to="/underconstruction" >
                  Returns
                  </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/underconstruction">
                    Cookie policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/underconstruction" >
                    Terms and Conditions
                    </NavLink>
                  </li>
                </ul>
            </div>
            <div className="contact">
              <h5>Contact</h5>
              <p>Adress: Coffee Street 24, Copenhagen</p>
              <p>Phone: +45 34 34 35 35</p>
            </div>
        </div>
    </footer>
    );
  }

  export default Footer;

