import { useQuery } from "react-query";
import { CartItemType } from "../Components/CartItemType";
import * as React from "react";
import { useCallback, useRef, useState } from "react";
/* export const BasketContext = React.createContext([[], () => {}]); */
export const BasketContext = React.createContext((cartItems: any) => {});

export const BasketProvider: React.FC = ({children}) => {
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const itemsRef = useRef(cartItems);
    itemsRef.current = cartItems;
    React.useEffect(() => {
      fetch('http://localhost:3000/customers/1/basketDetails')
        .then((response) => response.json())
        .then((cartItems) => {
          setCartItems(cartItems);
        })
    }, [cartItems]);
  
    return (
        <BasketContext.Provider
        value={useCallback(item => {
            setCartItems([...itemsRef.current, item]);
        }, [cartItems])}
      >
      </BasketContext.Provider>
    );
    /* return (
        <BasketContext.Provider
        value={useCallback(item => {
            setCartItems([...itemsRef.current, item]);
        }, [cartItems])}
      >
      </BasketContext.Provider>
    );
  }; */
  
}
