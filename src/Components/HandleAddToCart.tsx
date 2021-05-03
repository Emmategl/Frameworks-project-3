import React from "react";
import { CartItemType } from "./CartItemType";

export const getBasket = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3000/customers/1/basketDetails')).json();

export const getProducts = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3000/products/info')).json();

export async function HandleAddToCart(clickedItem: CartItemType) {
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
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }


export async function HandleDecrementFromCart(id: number) {
  try {
    const response = await fetch("http://localhost:3000/customers/1/basket/" + id + "/-1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
  } catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }
}


export async function HandleRemoveFromCart(id: number) {
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
  } catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }
}
