import CartItem from './BasketItems/BasketItems';
import { BasketWrapper } from './Basket.styles';
import { BasketItemType } from '../BasketItemType';
import { useContext, useState } from 'react';
import { FormContext } from '../../Pages/Login/FormContext';
import {FormData} from '../../Pages/Login/LoginForm';
import React from 'react';
import { MyButton } from '../Buttons/Buttons';


export type Props =  {
  cartItems: BasketItemType[];
  addToCart: (clickedItem: BasketItemType) => void;
  decrementFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, decrementFromCart, removeFromCart }) => {
  const calculateTotal = (items: BasketItemType[]) =>
  items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);

  const formContext = useContext(FormContext)
  if (!formContext)
    throw(new Error("FormContext is undefined!"))

    let email = formContext.login.email;
    let firstName = formContext.login.firstName;
    let lastName = formContext.login.lastName;
    const [state, setState] = React.useState<FormData>({ email: email, firstName: firstName, lastName: lastName});
    
    return (
    <BasketWrapper>
      {state.firstName ? <>
      <h2>{state.firstName}, here is your current basket</h2>
      </> : <h2>Your current basket</h2>
      }
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
      <h3>Total: {calculateTotal(cartItems).toFixed(2)} DKK</h3>
    </BasketWrapper>
  );
};

export default Cart;
