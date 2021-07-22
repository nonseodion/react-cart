import Wrapper from "./Item.styles";
// Types
import { TCartItem } from "../App";
// Components
import Button from '@material-ui/core/Button';


type prop = {
  item: TCartItem, 
  handleAddToCart: (clickedItem: TCartItem) => void,
}

const Item: React.FC<prop> = ({item, handleAddToCart}) => (
  <Wrapper>
    <img src={item.image} alt={item.title}></img>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
)

export default Item;