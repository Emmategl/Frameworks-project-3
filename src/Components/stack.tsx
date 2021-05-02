import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, match, NavLink, Route, Switch, useParams } from 'react-router-dom';
import { useQuery } from "react-query";

export type CartItemType = {
    productId: number;
    category: string;
    description: string;
    img_path: string;
    price: number;
    name: string;
    quantity: number;
  };

const ProductDetails = ({match}: {match: any}) => {
      const getProduct = async (): Promise<CartItemType> =>
      await (await fetch('http://localhost:3000/products/'+ match.params.productId)).json(); 
      const {data} = useQuery<CartItemType>(
        'product',
        getProduct
      );

      if(data){
        /* console.log(data) */ //gives me the correct product based on URL
        // {productId: 12, name: "Green tea", price: 40, img_path: "Images/Teas/12.png", description: "Tasting notes: Cool mint, Ginger, Spices"}
        console.log(data.name) //gives error "Property 'name' does not exist on type 'CartItemType[]
      }

    /* const product = data?.find((x) => x.productId === match.params.productId); */
    /* console.log(product) */
    
return (
  <div>
 <p>Product name: {data?.name}</p> // gives error "Object is possibly 'undefined' and 
 <p>Product ID: {match.params.productId}</p> 
</div>
)
}

export default ProductDetails
