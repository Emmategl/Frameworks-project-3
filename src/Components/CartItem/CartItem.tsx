import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../CartItemType';
// Styles
import { Wrapper } from './CartItem.styles';
import './Buttons.css';
import {MyButton} from '../../App';
import { CSSProperties } from 'react';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  decrementFromCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

const myStyles: CSSProperties = {
  textAlign: "center"
}

const CartItem: React.FC<Props> = ({ item, addToCart, decrementFromCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className='information'>
        <p>Price: {item.price} DKK</p>
        <p>Total: {(item.quantity * item.price).toFixed(2)} DKK</p>
      </div>
      <div className='buttons'>
        <MyButton 
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </MyButton>
        <p style={myStyles}>Quantity: {item.quantity}</p>
        <MyButton
          size='small'
          disableElevation
          variant='contained'
          onClick={() => decrementFromCart(item.productId)}
        >
          -
        </MyButton>
        <MyButton
        size='small'
        disableElevation
        variant='contained'
        onClick={() => removeFromCart(item.productId)}
        >
        Remove
      </MyButton>
      </div>
    </div>
    <img src={item.img_path} alt={item.name} />
  </Wrapper>
);

export default CartItem;
