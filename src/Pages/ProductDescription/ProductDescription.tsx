import { useQuery } from "react-query";
import { Wrapper } from "../../App.styles";
import {HandleAddToCart} from "../../Components/HandleAddToCart";
import './ProductDescription.css';
import { CartItemType } from "../../Components/CartItemType";
import noproduct from "./../../Images/noproduct.png"
import React from "react";
import { MyButton, MyButtonGrid, MyButtonProductPage } from "../../App";

  const init ={
    productId: 0,
    category: "No product with this id",
    description: "No product with this id",
    img_path: noproduct,
    price: 0,
    name: "No product with this id",
    quantity: 0,
    longDescription: "",
  }
  
function ProductDescription ({match}: {match: any}) {
      const getProduct = async (): Promise<CartItemType> =>
      await (await fetch('http://localhost:3000/products/'+ match.params.productId)).json(); 
      const {data} = useQuery<CartItemType>(
        'product',
        getProduct
      );

      let validatedData: CartItemType;
      if(data === undefined)
      {
        validatedData = init;}
      else{
      validatedData = data;
      }

return (
  <Wrapper>
  <div className="product">
    <div className="product-img">
        <img id = "image" src={validatedData?.img_path} alt={validatedData?.name}>
        </img>
    </div>
        <div className="product-des">
        <h1 id="name">{validatedData?.name}</h1>
        <h3 id="price">Price: {validatedData?.price} DKK</h3>
        <p id="des">{validatedData?.description}</p>
        <p id="des">{validatedData?.longDescription}</p>
        <MyButton onClick={() => HandleAddToCart(validatedData)}>Add to cart</MyButton>
    </div>
  </div>
</Wrapper>
)
}

export default ProductDescription
