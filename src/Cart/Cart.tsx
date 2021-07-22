// styles
import {Wrapper} from "./Cart.styles";
// Types
import { TCartItem } from "../App";
import CartItem from "../CartItem/CartItem";

type props = {
  items: TCartItem[],
  addToCart: (item: TCartItem) => void,
  removeFromCart: (id: number) => void,
}

const Cart: React.FC<props> = ({items, addToCart, removeFromCart}) => {
  const calculateTotal = (cartItems: TCartItem[]) => 
    cartItems.reduce((total, item) => total + (item.amount * item.price), 0)

  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {(items.length === 0) && <p>No items in cart</p>}
      { items.map(item => <CartItem 
        key={item.id}
        item={item} 
        addItemToCart={addToCart} 
        removeItemFromCart={removeFromCart}
      />) }
      <h2>Total: ${calculateTotal(items).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart;