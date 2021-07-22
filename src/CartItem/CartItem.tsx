//styles
import {Wrapper} from "./CartItem.styles";
//components
import { TCartItem } from "../App";
//marerial-ui components
import Button from '@material-ui/core/Button';

type props = {
  item: TCartItem,
  addItemToCart: (item: TCartItem) => void,
  removeItemFromCart: (id: number) => void,
}

const CartItem: React.FC<props> = ({item, addItemToCart, removeItemFromCart}) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className={"information"}>
        <p>${item.price.toFixed(2)}</p>
        <p>${(item.price * item.amount).toFixed(2)}</p>
      </div>
      <div className={"buttons"}>
        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={() => removeItemFromCart(item.id)}
        >
          -
        </Button>
        {item.amount}
        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={() => addItemToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title}></img>
  </Wrapper>
)

export default CartItem;