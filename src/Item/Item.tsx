// Types
import { CartItemType } from '../Components/CartItemType';
import {MyButtonGrid} from '../App';
// Styles
import { Wrapper } from './Item.styles';
import {
  Link,
} from "react-router-dom";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart}) => (
  <Wrapper>
    <img src={item.img_path} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    {/* <Button onClick={() => getDetails(item)}>See </Button> */}
    <Link to={{
     pathname: `${item.productId}`,
     state: {
     productObject: item
     }
   }}>
     Product page
   </Link>
    <MyButtonGrid onClick={() => handleAddToCart(item)}>Add to cart</MyButtonGrid>
  </Wrapper>
);

export default Item;

