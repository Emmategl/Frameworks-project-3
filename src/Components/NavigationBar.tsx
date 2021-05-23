import { useState } from 'react';
import '../Pages/style.css';
import './navigation.css';
// Components
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { StyledButton } from '../App.styles';
import { HandleAddToCart, HandleDecrementFromCart, HandleRemoveFromCart } from './HandleAddToCart';
import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import logo from "../Images/logo.png";
import ProductList from '../Pages/AllProducts/AllProducts';
import Coffees from '../Pages/Coffees/Coffees';
import Teas from '../Pages/Teas/Teas';
import ProductDetails from '../Pages/ProductDescription/ProductDescription';
// Types
import { CartItemType } from './CartItemType';
import Home from '../Pages/Home/HomePage';
import { LoginForm } from '../Pages/Login/LoginForm';


 const NavigationBar = () => {
    const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity, 0);

    const [cartOpen, setCartOpen] = useState(false);

    const [cartItemss, setCartItems] = useState([] as CartItemType[]);
        React.useEffect(() => {
          fetch('http://localhost:3001/customers/1/basketDetails')
            .then((response) => response.json())
            .then((cartItemss) => {
              setCartItems(cartItemss);
            })
        }, [cartItemss]);

      return (
        <div className="App">
          <BrowserRouter>
          <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
        cartItems={cartItemss}
        addToCart={HandleAddToCart}
        decrementFromCart={HandleDecrementFromCart}
        removeFromCart={HandleRemoveFromCart}
          />
        </Drawer>
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
                  <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItemss)} color='error'>
                <AddShoppingCartIcon />
                </Badge>
                </StyledButton>
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
                <Route path="/:productId" render={(props) => <ProductDetails {...props} />} />
                </Switch>
                </nav>
                </header>
        </BrowserRouter>
      </div>
    );
  }
  
  function Login() {
    return (
      <div>
        <LoginForm/>
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

export default NavigationBar