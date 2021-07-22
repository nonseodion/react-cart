import { useState } from "react";
import { useQuery } from "react-query";

//components
import LinearProgress from '@material-ui/core/LinearProgress';
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//styles
import {Wrapper, StyledButton} from "./App.styles";

export type TCartItem = {
  id: number,
  category: string,
  description: string,
  image: string,
  title: string,
  amount: number,
  price: number
}

const getProducts = async () : Promise<TCartItem[]> => 
  await (await fetch("https://fakestoreapi.com/products")).json()

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as TCartItem[]);

  const {data, error, isLoading} = useQuery("products", getProducts)
  console.log(data)

  const handleAddToCart: (item: TCartItem) => void = (item) => {
    //check if item is in cart
    const index = cartItems.findIndex(_item => _item.id === item.id);
    const newCartItems = [...cartItems];
    if(index >= 0) {
      newCartItems[index].amount = newCartItems[index].amount + 1;
    }else{
      newCartItems.push({...item, amount: 1});
    }

    setCartItems(newCartItems);
  };

  const getTotalItems = (items: TCartItem[]) => {
    return items.reduce((total, item) => total + item.amount,0)
  };

  const handleRemoveFromCart = (id: number) => {
    const index = cartItems.findIndex(_item => _item.id === id);
    let newCartItems = [...cartItems];

    if(index >= 0 && newCartItems[index].amount > 1) {
      newCartItems[index].amount = newCartItems[index].amount - 1;
    }else if( index >= 0) {
      newCartItems = newCartItems.filter(item => item.id !== id);
    }

    setCartItems(newCartItems);
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong</div>
  return (
    <Wrapper>
      <Drawer anchor={"right"} open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart items={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge color="error" badgeContent={getTotalItems(cartItems)}>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={8}>
        {data?.map( (item: TCartItem) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
