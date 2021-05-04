import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../CartItemType';
import { useContext, useState } from 'react';
import { FormContext } from '../../Pages/Login/FormContext';
import { App } from '../../Pages/Login/FormContext';
import {FormData} from '../../Pages/Login/LoginForm';
import { LoginInfo } from '../../Pages/Login/FormContext';
import { init } from '../../Pages/Login/FormContext';
import { UserContext } from '../../Pages/Login/Context';

export type Props =  {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeFromCart2: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, removeFromCart2 }) => {
  const calculateTotal = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
  
  const formContext = useContext(FormContext)
  console.log(formContext)
 /*  if (!formContext)
    throw(new Error("FormContext is undefined!"))

    let firstName = formContext.login.firstName;
    let lastName = formContext.login.lastName;
    let email = formContext.login.email; */

    

  return (
    <Wrapper>
      <h2>Your Shopping Cart </h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.productId}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeFromCart2={removeFromCart2}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
