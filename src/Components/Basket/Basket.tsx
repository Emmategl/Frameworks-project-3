import BasketItem from "./BasketItems/BasketItems";
import { BasketWrapper } from "./Basket.styles";
import { BasketItemType } from "../BasketItemType";
import React, { useContext } from "react";
import { FormContext } from "../../Pages/Login/FormContext";
import { FormData } from "../../Pages/Login/LoginForm";

export type BasketProps = {
  BasketItems: BasketItemType[];
  addToBasket: (clickedItem: BasketItemType) => void;
  decrementFromBasket: (id: number) => void;
  removeFromBasket: (clickedItem: BasketItemType) => void;
};

const Basket: React.FC<BasketProps> = ({
  BasketItems,
  addToBasket,
  decrementFromBasket,
  removeFromBasket,
}) => {
  const calculateTotalPrice = (items: BasketItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);

  const formContext = useContext(FormContext);
  if (!formContext) throw new Error("FormContext is undefined!");

  let email = formContext.login.email;
  let firstName = formContext.login.firstName;
  let lastName = formContext.login.lastName;
  const [state] = React.useState<FormData>({
    email: email,
    firstName: firstName,
    lastName: lastName,
  });
  
  return (
    <BasketWrapper>
      {state.firstName ? (
        <>
          <h2>{state.firstName}, here is your current basket</h2>
        </>
      ) : (
        <h2>Your current basket</h2>
      )}
      {BasketItems.length === 0 ? <p>No items in basket.</p> : null}
      {BasketItems.map((item) => (
        <BasketItem
          key={item.productId}
          item={item}
          addToBasket={addToBasket}
          decrementFromBasket={decrementFromBasket}
          removeFromBasket={removeFromBasket}
        />
      ))}
      <h3>Total: {calculateTotalPrice(BasketItems).toFixed(2)} DKK</h3>
    </BasketWrapper>
  );
};

export default Basket;
