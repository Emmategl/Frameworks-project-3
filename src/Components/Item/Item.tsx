import { BasketItemType } from "../BasketItemType";
import { MyButtonGrid } from "../../Components/Buttons/Buttons";
import { ItemWrapper } from "./Item.styles";
import { Link } from "react-router-dom";

type Props = {
  item: BasketItemType;
  handleAddToBasket: (clickedItem: BasketItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToBasket }) => (
  <ItemWrapper>
    <Link
      to={{ pathname: `${item.productId}`, state: { productObject: item } }}
    >
      <img src={item.img_path} alt={item.name} />
    </Link>
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h4>{item.price} DKK</h4>
    </div>
    <MyButtonGrid onClick={() => handleAddToBasket(item)}>
      Add to cart
    </MyButtonGrid>
  </ItemWrapper>
);

export default Item;
