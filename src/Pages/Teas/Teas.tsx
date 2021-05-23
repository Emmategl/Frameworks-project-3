// React
import React from 'react';
import { useQuery } from 'react-query';
// Components
import Item from '../../Components/Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// Functions
import { HandleAddToCart } from '../../Components/HandleAddToCart';
// Styles
import { Wrapper, StyledButton } from '../../App.styles';
// Types
import { CartItemType } from '../../Components/CartItemType';

const getTeas = async (): Promise<CartItemType[]> =>
await (await fetch('http://localhost:3001/product/categories/Tea')).json();

const Teas = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getTeas
  );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <h1>Teas</h1>
      <p>
      We not only select our coffee carefully, but also our selection of teas. That is why you can find
      a wide range of exclusive and tasty teas with us. Are you mostly into green, black or white tea?
      We have many exciting flavors and types of tea, so you can find the one that suits your taste buds.
      We only deal with the best suppliers so we can ensure that you get the best possible quality. We hand-pick
      our items and therefore have a unique selection of the best items that you can treat yourself to in a busy
      everyday life. We pack everything ourselves by hand, and do everything we can to give you a good experience
      when you buy tea and coffee online. We pack everything ourselves by hand, and do everything we can to give you
      a good experience when you buy tea and coffee online.
      </p>
      <br></br>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.productId} xs={12} sm={3}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Teas;
