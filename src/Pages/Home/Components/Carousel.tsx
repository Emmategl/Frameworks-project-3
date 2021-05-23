import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
// Components
import Item from '../../../Components/Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// Styles
import { Wrapper, StyledButton } from '../../../App.styles';
import React, { useContext } from 'react';
import { CartItemType } from '../../../Components/CartItemType';
import { HandleAddToCart } from '../../../Components/HandleAddToCart';
import { FormContext } from '../../Login/FormContext';
import {FormData} from '../../../Pages/Login/LoginForm';
import MediaQuery from 'react-responsive';


export const getProducts = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3001/product/popularity/1')).json();

export const Carousel = () => {
    const formContext = useContext(FormContext)
  if (!formContext)
    throw(new Error("FormContext is undefined!"))

    let firstName = formContext.login.firstName;
    let lastName = formContext.login.lastName;
    let email = formContext.login.email;
    const [state, setState] = React.useState<FormData>({ firstName: firstName, lastName: lastName, email: email });

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;
  

  return (
    <Wrapper>
      <h2>See our best selling products {state.firstName}</h2>
      <br></br>
      <MediaQuery minWidth={1024}>
      <Grid container spacing={3}>
      {data?.map((item, index) => 
        index < 4 &&
        (
          <Grid item key={item.productId} xs={12} sm={3}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>

      <MediaQuery maxWidth={1024}>
      <Grid container spacing={3}>
        {data?.map((item, index) => 
        index < 3 &&
        (
          <Grid item key={item.productId} xs={12} sm={4}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>
    </Wrapper>
  );
};

export default Carousel;
