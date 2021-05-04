import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../CartItemType';
// Styles
import { Wrapper } from './CartItem.styles';
import './Buttons.css';
import {MyButton} from '../../App';

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
        <MyButton className="button"
          size='small'
          disableElevation
          variant='contained'
          
          onClick={() => removeFromCart(item.productId)}
        >
          -
        </MyButton>
        <p>{item.quantity}</p>
        <MyButton
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </MyButton>
        <MyButton
        size='small'
        disableElevation
        variant='contained'
        onClick={() => removeFromCart2(item.productId)}
        >
        Remove
      </MyButton>
      </div>
    </div>
    <img src={item.img_path} alt={item.name} />
  </Wrapper>
);

export default CartItem;
