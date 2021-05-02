import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../Components/allproducts';
// Styles
import { Wrapper } from './Item.styles';
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
  Link,
} from "react-router-dom";





type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  /* getDetails: (clickedItem: CartItemType) => void; */
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
    <Link to='allproducts/:name'>ferefrefr</Link> 
    
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;

