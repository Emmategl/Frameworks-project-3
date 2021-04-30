import React from 'react';
import logo from "../Images/logo.png";
/* import '../App.css'; */
import '../style.css';
import '../navigation.css';
import TopPicture from './topPictures';
import Carousel from './carousel';
import PictureBanner from './pictureBanner';
import SignUp from './Login';
import UserName from './UserName';
import Register from './Register';
import ProductList from './allproducts';
import Coffees from './coffees';
import Teas from './teas';
import {Products} from './prod';
import {Cart} from './car';

import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
  Link,
} from "react-router-dom";


class NavBar extends React.Component {
    render() {
      return (
        <div className="App">
          <BrowserRouter>
          <header>
          <Link className='logos' to='/'>
          <img className="logo" src={logo} alt="Hot Liquids" />
        </Link> 
          <nav>
                <div className='topnav-right'>
                <ul className="topNav">
                  <li>
                    <NavLink activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/basket">
                      Basket
                    </NavLink>
                  </li>
                </ul>
                </div>
                <ul className="bottomNav">
                  <li>
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                  <NavLink exact activeClassName="active" to="/allproducts">
                  All products
                  </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/coffees">
                      Coffees
                    </NavLink>
                  </li>
  
                  <li>
                    <NavLink activeClassName="active" to="/teas">
                      Teas
                    </NavLink>
                  </li>
                </ul>
                
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/allproducts" component={AllProducts} />
                <Route path="/coffees" component={Coffee} />
                <Route path="/teas" component={Tea} />
                <Route path="/login" component={Login} />
                <Route path="/basket" component={Basket} />
                </Switch>
                </nav>
                </header>
        </BrowserRouter>
      </div>
    );
  }
}

function Home() {
    return (
        <div>
          <TopPicture/>
          <Carousel/>
          <PictureBanner/>
        </div>
      );
  }
  
  function Login() {
    return (
      <div>
        <UserName/>
        <SignUp/>
      </div>
    );
  }

  function AllProducts() {
    return (
      <div>
       <ProductList/>
      </div>
    );
  }
  
  function Coffee() {
    return (
      <div>
        <Coffees/>
      </div>
    );
  }
  
  function Tea() {
    return (
      <div>
       <Teas/>
      </div>
    );
  }
  
  function Basket() {
    return <h2>Basket</h2>;
  }
  

export default NavBar