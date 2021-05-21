import { useQuery } from "react-query";
import { Wrapper } from "../../App.styles";
import {HandleAddToCart} from "../../Components/HandleAddToCart";
import './ProductDescription.css';
import { CartItemType } from "../../Components/CartItemType";
import noproduct from "./../../Images/noproduct.png"
import React from "react";
import { MyButton, MyButtonGrid, MyButtonProductPage } from "../../App";
import { Box } from '@material-ui/core'



function ProductDescription ({match}: {match: any}) {
      const getProduct = async (): Promise<CartItemType> =>
      await (await fetch('http://localhost:3000/products/'+ match.params.productId)).json(); 
      const {data} = useQuery<CartItemType>(
        'product',
        getProduct
      );

return (
  <Wrapper>
  <div className="product">
    {data ? <> <div className="product-img">
    <div className="image">
        <img id = "image" src={data.img_path} alt={data.name}>
        </img>
        <h6><span>{data.category}</span></h6>
        </div>
        </div>
        <div className="product-des">
        <h1 id="name">{data.name}</h1>
        <h3 id="price">Price: {data.price} DKK</h3>
        <p id="des">{data.description}</p>
        <p id="des">{data.longDescription}</p>
        <MyButton onClick={() => HandleAddToCart(data)}>Add to cart</MyButton>
    </div> </> : <h1>Loading...</h1>
    }
  </div>
</Wrapper>
)
}

export default ProductDescription
