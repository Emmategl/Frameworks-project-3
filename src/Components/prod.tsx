import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
/* import { CartItemType } from "./allproducts"; */

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/products/info')).json();
  
  
  type CartItemType = {
    productId: number;
    category: string;
    description: string;
    img_path: string;
    price: number;
    name: string;
    quantity: number;
  };

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


  const Prod = (productId: any) => {

    const getProduct = async (): Promise<CartItemType[]> =>
    await (await fetch('http://localhost:3000/products/2')).json(); 
  
    const { data, isLoading, error } = useQuery<CartItemType[]>(
      'product',
      getProduct
    );
  
    console.log(data);
    console.log('product')
    console.log(getProduct);
  
  
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

  return (
          <div className="product-des">
         {/*  <h1 id="name">{e.name}</h1> */}
          <button className="btn add">Add to cart</button>
          </div>
        );
      }















export default Prod;