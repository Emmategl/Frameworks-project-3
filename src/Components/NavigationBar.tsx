import { useState } from 'react';
/* import '../Pages/style.css'; */
/* import './navigation.css'; */
// Components
import Cart from './Basket/Basket';
import Drawer from '@material-ui/core/Drawer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { StyledButton } from '../App.styles';
import { HandleAddToCart, HandleDecrementFromCart, HandleRemoveFromCart } from './BasketFunctionality';
import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import logo from "../Images/logo.png";
// Types
import { BasketItemType } from './BasketItemType';

 const NavigationBar = () => {

    const displayAmount = (items: BasketItemType[]) =>
    items.reduce((items: number, item) => items + item.quantity, 0);

    const [cartOpen, setCartOpen] = useState(false);

    const [cartItemss, setCartItems] = useState([] as BasketItemType[]);
        React.useEffect(() => {
          fetch('http://localhost:3001/customers/1/basketDetails')
            .then((response) => response.json())
            .then((cartItemss) => {
              setCartItems(cartItemss);
            })
        }, [cartItemss]);

      return (
        <div className="App">
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
                  <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={displayAmount(cartItemss)} color='error'>
                <AddShoppingCartIcon />
                </Badge>
                </StyledButton>
                  </li>
                  <li> 
                    <NavLink activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
                <ul className="bottomNav">
                  <li>
                    <NavLink exact activeClassName="active" to="/" activeStyle={{backgroundColor: 'rgb(176, 187, 170)'}}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                  <NavLink exact activeClassName="active" to="/allproducts" activeStyle={{backgroundColor: 'rgb(176, 187, 170)'}}>
                  All products
                  </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/coffees" activeStyle={{backgroundColor: 'rgb(176, 187, 170)'}}>
                      Coffees
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/teas" activeStyle={{backgroundColor: 'rgb(176, 187, 170)'}}>
                      Teas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/aboutus" activeStyle={{backgroundColor: 'rgb(176, 187, 170)'}}>
                      About us
                    </NavLink>
                  </li>
                </ul>
                </nav>
                </header>
      </div>
    );
  }
  
export default NavigationBar