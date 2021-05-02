
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, match, NavLink, Route, Switch, useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import getById, { CartItemType } from './nav';
import { useQuery } from "react-query";


/* interface product { */
/*     productId: number; */
/*     description: string; */
/*     img_path: string; */
/*     price: number; */
/*     name: string; */
/*     longDescription: string; */
/* } */
/*  */
/* function Product({match}: {match: any}) { */
/*     return ( */
/*       <div> */
{/*         This is our lovely product page! */}
{/*         You are currently viewing {match.params.id} */}
{/*       </div> */}
/*     ); */
/*   } */


/* function ProductDetail(this: any, {props}: {props: any}) { */
/*     const id = this.props.match.params.id; */
/*     console.log(props) */
/*       return ( */
/*       <div> */
{/*         <h1>Book details go here</h1> */}
{/*         <h3></h3> */}
{/*       </div> */}
/*     ) */
/*   } */

/* const Product = (props: { match: { params: { id: number; }; }; }) => { */
/*     console.log(props.match.params.id) */
/*       const product = products.find((x) => x.id === props.match.params.id); */
/*       console.log(product) */
/*         if (!product) { */
/*           return <div>product not found!</div>; */
/*         } */
/*         if (product) { */
/*             return <div>product not found!</div>; */
/*           } */
/*         } */

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('http://localhost:3000/products/info')).json();

  interface Provider {
    productId: number;
    category: string;
    description: string;
    img_path: string;
    price: number;
    name: string;
    quantity: number;
}

const ProductDetail = ({match}: {match: any}) => {
      const getProduct = async (): Promise<CartItemType[]> =>
      await (await fetch('http://localhost:3000/products/'+ match.params.productId)).json(); 
      const {data} = useQuery<CartItemType[]>(
        'product',
        getProduct
      );

      if(data){
      /* console.log(data); */ //data gives the correct product array
      console.log(data) //gives error "Property 'name' does not exist on type 'CartItemType[]'"
      /* console.log('product') */
      }

    /* const product = data?.find((x) => x.productId === match.params.productId); */
    /* console.log(product) */
    
return (
  <div>
 {/* <p>Product ID: {data.name}</p> */}
 <p>Product ID: {match.params.img_path}</p> 
 <p>Product ID: {match.params.productId}</p> 

  {/*   <h3>ID: product</h3> */}
  {/* <p>Product ID: {id.params.productId}</p> */}
  {/* <img src="" alt="" /> */}
  {/* <p>Product name:{location.state.productObject.attributes.name} </p> */}
  {/* <p>Product description: </p> */}
</div>
)
    }

  export default ProductDetail


 /*  const ProductDetail = ({match}: {match: any}, {location} : {location: any}) */