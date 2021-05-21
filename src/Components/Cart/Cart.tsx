import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../CartItemType';
import { useContext, useState } from 'react';
import { FormContext } from '../../Pages/Login/FormContext';
import {FormData} from '../../Pages/Login/LoginForm';
import React from 'react';

export type Props =  {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  decrementFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, decrementFromCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);

  const formContext = useContext(FormContext)
  if (!formContext)
    throw(new Error("FormContext is undefined!"))

    let email = formContext.login.email;
    let firstName = formContext.login.firstName;
    let lastName = formContext.login.lastName;
    const [state, setState] = React.useState<FormData>({ email: email, firstName: firstName, lastName: lastName});

    
    return (
    <Wrapper>
      <h2>Your Shopping Cart {state.firstName}</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.productId}
          item={item}
          addToCart={addToCart}
          decrementFromCart={decrementFromCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: {calculateTotal(cartItems).toFixed(2)} DKK</h2>
    </Wrapper>
  );
};

export default Cart;
