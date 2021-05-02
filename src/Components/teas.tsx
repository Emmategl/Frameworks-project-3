import { useState } from 'react';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
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

const getTeas = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3000/product/categories/tea')).json();

const getBasket = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3000/customers/1/basketDetails')).json();


const Teas = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  React.useEffect(() => {
  fetch('http://localhost:3000/customers/1/basketDetails')
    .then((response) => response.json())
    .then((cartItems) => {
      setCartItems(cartItems);
    })
}, [cartItems]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getTeas
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity, 0);

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

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.productId} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Teas;
