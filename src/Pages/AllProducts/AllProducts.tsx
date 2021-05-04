import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
// Components
import Item from '../../Components/Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// Styles
import { Wrapper, StyledButton } from '../../App.styles';
import React from 'react';
import { getProducts, HandleAddToCart } from '../../Components/HandleAddToCart';
import { CartItemType } from "../../Components/CartItemType";


export const ProductList = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <h1>All of our products</h1>
      <p>At 'Hot Liquids' you will always find a good selection of really delicious completely freshly roasted specialty coffee
        and tea in many flavours. We only sell coffee beans of the highest quality, so if you are looking for freshly roasted
        filter or espresso coffee, have a look at our large selection. We not only select our coffee carefully, but also our
        selection of teas. That is why you can find a wide range of exclusive and tasty teas with us. Are you mostly into green,
        black or white tea? We have many exciting flavors and types of tea, so you can find the one that suits your taste buds.
        We only deal with the best suppliers so we can ensure that you get the best possible quality.
        We only deal with the best suppliers so we can ensure that you get the best possible quality.
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

export default ProductList;
