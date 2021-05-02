import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../Components/allproducts';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (productId: number) => void;
  removeFromCart2: (productId: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart, removeFromCart2 }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.productId)}
        >
          -
        </Button>
        <p>{item.quantity}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
        <Button
        size='small'
        disableElevation
        variant='contained'
        onClick={() => removeFromCart2(item.productId)}
        >
        Remove
      </Button>
      </div>
    </div>
    <img src={item.img_path} alt={item.name} />
  </Wrapper>
);

export default CartItem;
