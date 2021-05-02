import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, match, NavLink, Route, Switch, useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { Wrapper } from "../App.styles";
import { MyButtonGrid } from "../App";


export type CartItemType = {
    productId: number;
    category: string;
    description: string;
    img_path: string;
    price: number;
    name: string;
    quantity: number;
    longDescription: string;
  };

  type Props = {
    handleAddToCart: (clickedItem: CartItemType) => void;
    /* getDetails: (clickedItem: CartItemType) => void; */
  };
  
const ProductDetails= ({match}: {match: any}) => {
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
  <Wrapper>
  <img src={data?.img_path} alt={data?.name} />
  <div>
    <h3>{data?.name}</h3>
    <p>{data?.description}</p>
    <p>{data?.longDescription}</p>
    <h3>${data?.price}</h3>
  </div>
  {/* <MyButtonGrid onClick={() => handleAddToCart(data)}>Add to cart</MyButtonGrid> */}
</Wrapper>
)
}

export default ProductDetails
