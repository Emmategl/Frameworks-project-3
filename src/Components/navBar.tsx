import React, { useEffect } from 'react';
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
import Prod from './prod';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { useState } from 'react';
import {CartItemType} from './allproducts'
import getBasket from './allproducts'
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import {Props} from '../Cart/Cart';
import handleRemoveFromCart from './allproducts';
import handleDecrementFromCart from './allproducts';
import handleAddToCart from './allproducts';
import cartItemss from './allproducts';
import cartOpen from './allproducts';
import getProducts from './allproducts';
import CartItem from '../CartItem/CartItem';


// Styles
import { Wrapper, StyledButton } from '../App.styles';

import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
  Link,
} from "react-router-dom";
import { Drawer } from '@material-ui/core';


function Offee(f: boolean) {
  const [cartOpen, setCartOpen] = useState(false);
  setCartOpen(f)
}

const getTotalItems = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.quantity, 0);

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
                      <AddShoppingCartIcon onClick={() => Offee(true)}/>
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
                <Route exact path="/id" component={ProductDescription} />
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

  function ProductDescription() {
    return (
      <div>
       <Prod/>
      </div>
    );
  }

  /* const description = () => { */
  /*   const [isLoading, setIsLoading] = useState(true); */
  /*   const [data, setData] = useState(); */
  /*  */
  /*   useEffect(() => { */
  /*     fetch("http://localhost:3000/products/5" + clickedItem.productId { */
  /*       method: "GET" */
  /*     }) */
  /*       .then((res) => res.json()) */
  /*       .then((response) => { */
  /*         setData(response.results); */
  /*         setIsLoading(false); */
  /*       }) */
  /*       .catch((error) => console.log(error)); */
  /*   }, []); */
  /*  */
  /*   return ( */
  /*     <> */
  {/*       {!isLoading && */}
  /*         data.map((person, index) => { */
  /*           return <h5 key={index}>{person.name}</h5>; */
  /*         })} */
  {/*     </> */}
  /*   ); */
  /* }; */
  

export default NavBar