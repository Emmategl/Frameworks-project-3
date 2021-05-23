import { useQuery } from "react-query";
import { Wrapper } from "../../App.styles";
import {HandleAddToCart} from "../../Components/HandleAddToCart";
import './ProductDescription.css';
import { BasketItemType } from "../../Components/BasketItemType";
import { MyButton } from '../../Components/Buttons/Buttons';
import MediaQuery from "react-responsive";
import construction from "../../Images/Construction/Construction.gif";

function ProductDescription ({match}: {match: any}) {
      const getProduct = async (): Promise<BasketItemType> =>
      await (await fetch('http://localhost:3001/products/'+ match.params.productId)).json(); 
      const {data} = useQuery<BasketItemType>(
        'product',
        getProduct
      );

return (
  <Wrapper>
    <MediaQuery minWidth={768}>
  <div className="product">
    {data ? <> 
    <div className="product-img">
   {/*  <div className="image"> */}
        <img /* id = "image" */ src={data.img_path} alt={data.name}></img>
        <h6><span>{data.category}</span></h6>
    </div>
        {/* </div> */}
    <div className="product-des">
        <h1 id="name">{data.name}</h1>
        <h3 id="price">Price: {data.price} DKK</h3>
        <p id="des">{data.description}</p>
        <p id="des">{data.longDescription}</p>
        <MyButton onClick={() => HandleAddToCart(data)}>Add to cart</MyButton>
    </div>
    </> : <h1>Loading...</h1>
    }
  </div>
  </MediaQuery>
  <MediaQuery maxWidth={767}>
  <div className="product">
    {data ? <> 
        <img id = "image" src={data.img_path} alt={data.name}>
        </img>
        <h6><span>{data.category}</span></h6>
        <div className="product-des">
        <h1 id="name">{data.name}</h1>
        <h3 id="price">Price: {data.price} DKK</h3>
        <p id="des">{data.description}</p>
        <p id="des">{data.longDescription}</p>
        <MyButton onClick={() => HandleAddToCart(data)}>Add to cart</MyButton>
    </div> </> : <h1>Loading...</h1>
   }
  </div>
  </MediaQuery>
</Wrapper>

  

)
}

export default ProductDescription
