import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../Components/allproducts';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + /* item.quantity * */ item.price, 0);


  /* async function handleBasket() { */
  /*   try { */
  /*     const response = await fetch("http://localhost:3000/customers/1/basket", { */
  /*       method: "GET", */
  /*       headers: { */
  /*         "Content-type": "application/json; charset=UTF-8", */
  /*       }, */
  /*     }); */
  /*     let data = await response.json(); */
  /*     console.log(data) */
  /*     return data */
  /*     alert("Item"); */
  /*   } catch (err) { */
  /*     alert("Something"); */
  /*     console.log(err); */
  /*   } */
  /* } */

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.productId}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
