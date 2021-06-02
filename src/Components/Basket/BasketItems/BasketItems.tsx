import { BasketItemType } from '../../BasketItemType';
import { BasketItemsWrapper } from './BasketItems.styles';
import {MyButton} from '../../Buttons/Buttons';
import { CSSProperties } from 'react';

type BasketItemProps = {
  item: BasketItemType;
  addToBasket: (clickedItem: BasketItemType) => void;
  decrementFromBasket: (productId: number) => void;
  removeFromBasket: (productId: number) => void;
};

const myStyles: CSSProperties = {
  textAlign: "center"
}

const BasketItem: React.FC<BasketItemProps> = ({ item, addToBasket, decrementFromBasket, removeFromBasket }) => (
  <BasketItemsWrapper>
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
          onClick={() => addToBasket(item)}
        >
          +
        </MyButton>
        <p style={myStyles}>Quantity: {item.quantity}</p>
        <MyButton
          size='small'
          disableElevation
          variant='contained'
          onClick={() => decrementFromBasket(item.productId)}
        >
          -
        </MyButton>
        <MyButton
        size='small'
        disableElevation
        variant='contained'
        onClick={() => removeFromBasket(item.productId)}
        >
        Remove
      </MyButton>
      </div>
    </div>
    <img src={item.img_path} alt={item.name} />
  </BasketItemsWrapper>
);

export default BasketItem;
