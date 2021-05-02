import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { MyButtonGrid } from "../App";
import Item from '../Item/Item';
import { Wrapper } from "../Item/Item.styles";
import handleAddToCart from './nav';
/* import { CartItemType } from "./allproducts"; */

/* const getProducts = async (): Promise<CartItemType[]> => */
/*   await (await fetch('http://localhost:3000/products/info')).json(); */
  
  type CartItemType = {
    productId: number;
    category: string;
    description: string;
    img_path: string;
    price: number;
    name: string;
    quantity: number;
  };

  type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    /* getDetails: (clickedItem: CartItemType) => void; */
  };

  const Prod = () => {

    const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/products/info')).json();

  const getProduct = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/products/2')).json(); 
  
  const {data, isLoading, error } = useQuery<CartItemType[]>(
    'product',
    getProduct
  );
  
  console.log(data);
  console.log('product')
  console.log(getProduct);

  const ItemDes: React.FC<Props> = ({ item, handleAddToCart}) => (
    <Wrapper>
      <img src={item.img_path} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      {/* <Button onClick={() => getDetails(item)}>See </Button> */}
      <MyButtonGrid onClick={() => handleAddToCart(item)}>Add to cart</MyButtonGrid>
    </Wrapper>
  );

  return (
          <div className="product-des">
             {/* <h1 id="name">{data?.name}</h1> */}
             <Grid container spacing={3}>
              {data?.map(item => (
                <Grid item key={item.productId} xs={12} sm={3}>
                   <ItemDes item={item} handleAddToCart={handleAddToCart} />
                  <p>fff</p>
                </Grid>
              ))}
            </Grid>
              {/*  <h1 id="name">{e.name}</h1> */}
              {/* <button className="btn add">Add to cart</button> */}
          </div>
        );
      }













      /* console.log(d) */
/* const [isLoading, setIsLoading] = useState(true); */
/* const [data, setData] = useState([] as CartItemType[]); */
/* useEffect(() => { */
/*   fetch(`http://localhost:3000/products/2`) */
/*     .then((res) => res.json()) */
/*     .then((data) => { */
/*       setData(data); */
/*       setIsLoading(false); */
/*       console.log(`http://localhost:3000/products/1`) */
/*     }) */
/*     .catch((error) => console.log(error)); */
/* }, [data]); */




/* const Prod = (productId: any) => { */
/*   const [isLoading, setIsLoading] = useState(true); */
/*   const [data, setData] = useState([] as CartItemType[]); */
/*   useEffect(() => { */
/*     fetch(`http://localhost:3000/products/${productId}`, {}) */
/*       .then((res) => res.json()) */
/*       .then((response) => { */
/*         setData(response); */
/*         setIsLoading(false); */
/*         console.log(`http://localhost:3000/products/${productId}`) */
/*       }) */
/*       .catch((error) => console.log(error)); */
/*   }, [productId]); */
/*  */


export default Prod;