import { useQuery } from "react-query";
import { Wrapper } from "../../App.styles";
import {HandleAddToCart} from "../../Components/HandleAddToCart";
import './ProductDescription.css';
import { CartItemType } from "../../Components/CartItemType";

  const init ={
    productId: 0,
    category: "No product with this id",
    description: "No product with this id",
    img_path: "No product with this id",
    price: 0,
    name: "No product with this id",
    quantity: 0,
    longDescription: "No product with this id",
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
      {validatedData = init;}
      else{
      validatedData = data;
      }
return (
  <Wrapper>
  <div className="product">
    <div className="product-img">
        <img id = "image" src={data?.img_path} alt={data?.name}>
        </img>
    </div>
        <div className="product-des">
        <h1 id="name">{data?.name}</h1>
        <h3 id="price">Price: {data?.price} DKK</h3>
        <p id="des">{data?.description}</p>
        <p id="des">{data?.longDescription}</p>
        <button  className="btn add" onClick={() => HandleAddToCart(validatedData)}>Add to cart</button>
    </div>
  </div>
</Wrapper>
)
}

export default ProductDescription
