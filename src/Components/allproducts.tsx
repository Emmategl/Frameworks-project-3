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

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/products/info')).json();

  export const getBasket = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/customers/1/basketDetails')).json();


  /* const getBasket = async () => { */
  /*   const res = await fetch("http://localhost:3000/customers/1/basket"); */
  /*   return res.json(); */
  /* }; */


 const ProductList = () => {

 /* const [cartOpen, setCartOpen] = useState(false); */

const [cartItemss, setCartItems] = useState([] as CartItemType[]);
React.useEffect(() => {
  fetch('http://localhost:3000/customers/1/basketDetails')
    .then((response) => response.json())
    .then((cartItemss) => {
      setCartItems(cartItemss);
    })
}, [cartItemss]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  /* const getTotalItems = (items: CartItemType[]) => */
  /*   items.reduce((ack: number, item) => ack + item.quantity, 0); */

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


  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  /* return ( */
  /*   <Wrapper> */
  {/*     <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}> */}
  {/*       <Cart */}
  /*         cartItems={cartItems} */
  /*         addToCart={handleAddToCart} */
  /*         removeFromCart={handleDecrementFromCart} */
  /*       /> */
  {/*     </Drawer> */}
  {/*     <StyledButton onClick={() => setCartOpen(true)}> */}
  {/*       <Badge badgeContent={getTotalItems(cartItems)} color='error'> */}
  {/*         <AddShoppingCartIcon /> */}
  {/*       </Badge> */}
  {/*     </StyledButton> */}
  {/*     <Grid container spacing={3}> */}
  {/*       {data?.map(item => ( */}
  /*         <Grid item key={item.productId} xs={12} sm={4}> */
  {/*           <Item item={item} handleAddToCart={handleAddToCart} /> */}
  {/*         </Grid> */}
  /*       ))} */
  {/*     </Grid> */}
  {/*   </Wrapper> */}
  /* ); */

  return (
    <Wrapper>
      <h1>All of our products</h1>
      <p>At 'Hot Liquids' you will always find a good selection of really delicious completely freshly roasted specialty coffee
        and tea in many flavours. We only sell coffee beans of the highest quality, so if you are looking for freshly roasted
        filter or espresso coffee, have a look at our large selection. We not only select our coffee carefully, but also our
        selection of teas. That is why you can find a wide range of exclusive and tasty teas with us. Are you mostly into green,
        black or white tea? We have many exciting flavors and types of tea, so you can find the one that suits your taste buds.
        We only deal with the best suppliers so we can ensure that you get the best possible quality.
        We only deal with the best suppliers so we can ensure that you get the best possible quality.
        </p>
      <br></br>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.productId} xs={12} sm={3}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProductList;
