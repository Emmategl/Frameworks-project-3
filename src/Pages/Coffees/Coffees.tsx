import { useState } from 'react';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
// Components
import Item from '../../Components/Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// Styles
import { Wrapper, StyledButton } from '../../App.styles';
import React from 'react';
// Types
import { CartItemType } from '../../Components/CartItemType';
import { HandleAddToCart } from '../../Components/HandleAddToCart';
import MediaQuery from 'react-responsive';
import { StyledLinearProgress } from '../../Components/StyledLinearProgress';

const getCoffees = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3001/product/categories/Coffee')).json();

const Coffees = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getCoffees
  );
  if (isLoading) return <StyledLinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <h1>Coffees</h1>
      <p>Here you will always find a good selection of really delicious completely freshly roasted specialty coffee
        in many flavors. We only sell coffee beans of the highest quality, so if you are looking for freshly roasted
        filter or espresso coffee, have a look at our large selection. With us, you also have the opportunity to buy
        raw / green coffee beans if you think it's fun to roast your coffee yourself. Freshly roasted coffee tastes a
        lot better, and therefore you can buy raw coffee beans on this page, so you can roast the beans for your coffee
        yourself. The advantage of having to roast them yourself is that you decide for yourself how the coffee beans are
        to be roasted and thus taste. So whether you are mostly for a light roast, between roasting or dark roasting,
        it is you who is in control. In addition, you can also add flavors you love and thus produce your very own specialty coffee.
      </p>
      <br></br>
      <MediaQuery minWidth={1024}>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.productId} xs={12} sm={3}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>

       <MediaQuery maxWidth={1024}>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.productId} xs={12} sm={4}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>

      <MediaQuery maxWidth={600}>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.productId} xs={12} sm={7}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>
    </Wrapper>
  );
};

export default Coffees;
