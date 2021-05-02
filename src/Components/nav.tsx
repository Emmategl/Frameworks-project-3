import { useState } from 'react';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import '../style.css';
import '../navigation.css';
// Components
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton } from '../App.styles';
import { useEffect } from 'react';
import React from 'react';
import { kStringMaxLength } from 'node:buffer';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import handleRemoveFromCart from './allproducts';
import handleDecrementFromCart from './allproducts';
import handleAddToCart from './allproducts';
import logo from "../Images/logo.png";
import ProductList from './allproducts';
import Coffees from './coffees';
import Teas from './teas';
import Prod from './prod';
import withRouter from './test';
import ProdDetails from './prodDetails';
import ProductDetails from './stack';
import TopPicture from './topPictures';
import Carousel from './carousel';
import PictureBanner from './pictureBanner';
import SignUp from './Login';
import UserName from './UserName';
import { Provider } from 'react-redux';
import { profileEnd } from 'node:console';

// Types
export type CartItemType = {
  productId: number;
  category: string;
  description: string;
  img_path: string;
  price: number;
  name: string;
  quantity: number;
};

function Offee(f: boolean) {
    const [cartOpen, setCartOpen] = useState(false);
    setCartOpen(f)
  }

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/products/info')).json();

  export const getBasket = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/customers/1/basketDetails')).json();


  export function getById(id:any) {  
    const requestOptions = { method: 'GET'}; 
    return fetch('http://localhost:3000/products/'+id)
  }

  /* const getBasket = async () => { */
  /*   const res = await fetch("http://localhost:3000/customers/1/basket"); */
  /*   return res.json(); */
  /* }; */

 const Nav = () => {
    const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity, 0);

  const [cartOpen, setCartOpen] = useState(false);
    
        let [cartItemss, setCartItems] = useState([] as CartItemType[]);
        React.useEffect(() => {
          fetch('http://localhost:3000/customers/1/basketDetails')
            .then((response) => response.json())
            .then((cartItemss) => {
              setCartItems(cartItemss);
            })
        }, [cartItemss]);



      
        async function handleDecrementFromCart(id: number) {
          try {
            const response = await fetch("http://localhost:3000/customers/1/basket/" + id + "/-1", {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            let data = await response.json();
            alert("Item decremented");
          } catch (err) {
            alert("Something Went Wrong");
            console.log(err);
          }
        }

        async function handleRemoveFromCart(id: number) {
  try {
    const response = await fetch("http://localhost:3000/customers/1/basket/", {
      method: "DELETE",
      body: JSON.stringify({
        productId: id,
        quantity: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    alert("Item removed");
  } catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }
}

async function handleAddToCart(clickedItem: CartItemType) {
  try {
    const isItemInCart = (await getBasket()).some(item => item.productId === clickedItem.productId); 
    if (isItemInCart) {
      const response = await fetch("http://localhost:3000/customers/1/basket/" + clickedItem.productId + "/1", {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return
    } 
    const response = await fetch("http://localhost:3000/customers/1/basket", {
      method: "POST",
      body: JSON.stringify({
        productId: clickedItem.productId,
        quantity: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    alert("Item Added To Cart");
    return setCartItems((prev) => [...prev, clickedItem])
  } catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }
}


      return (
        <div className="App">
          <BrowserRouter>
          <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
        cartItems={cartItemss}
        addToCart={handleAddToCart}
        removeFromCart={handleDecrementFromCart}
        removeFromCart2={handleRemoveFromCart}
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
                <Route exact path="/ti" component={Prod} />
                <Route path="/:productId" render={(props) => <ProductDetails {...props} />} />
                {/* <Route exact path="/ProductPage/:productId" component={Prod} /> */}
                </Switch>
                </nav>
                </header>
        </BrowserRouter>
      </div>
    );
  }

  function Home() {
    return (
        <div>
          <TopPicture/>
          {/* <Carousel/> */}
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

export default Nav