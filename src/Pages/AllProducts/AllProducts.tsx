import {useQuery} from 'react-query';
import Item from '../../Components/Item/Item';
import Grid from '@material-ui/core/Grid';
import { Wrapper } from '../../App.styles';
import React from 'react';
import { HandleAddToCart } from '../../Components/BasketFunctionality';
import { BasketItemType } from "../../Components/BasketItemType";
import MediaQuery from 'react-responsive'
import { StyledLinearProgress } from '../../Components/StyledLinearProgress';
import { getAllProducts } from '../../Components/FetchFunctionality';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const AllProducts = () => {

  //Make a state for the checkbox
  const [checkBoxes, setCheckBoxes] = React.useState({checked: false,});
  const handleChange = (event: { target: { name: string; checked: boolean; }; }) => {
    setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
  };

  //Retrieve the list of products
  const { data, isLoading, error } = useQuery<BasketItemType[]>(
    'products',
    getAllProducts
  );
  if (isLoading) return <StyledLinearProgress color="primary"/>;
  if (error) return <div>Sorry something went wrong when fetching the products ...</div>;

  //Check if the checkbox is checked. If it is, filter the list of products based on popularity.
  if (checkBoxes.checked){
    var filteredData = data?.filter(a => a.popularity === 1);
  }
  else{
    filteredData = data
  }

  return (
    <Wrapper>
      <h1>All products</h1>
      <p>At 'Hot Liquids' you will always find a good selection of really delicious completely freshly roasted specialty coffee
        and tea in many flavours. We only sell coffee beans of the highest quality, so if you are looking for freshly roasted
        filter or espresso coffee, have a look at our large selection. We not only select our coffee carefully, but also our
        selection of teas. That is why you can find a wide range of exclusive and tasty teas with us.
      </p>
    <FormGroup row>
      <FormControlLabel
        control={
        <Checkbox
        checked={checkBoxes.checked}
        onChange={handleChange}
        name="checked" />}
        label="See our best selling products"
      />
    </FormGroup>
    <MediaQuery minWidth={1024}>
    <Grid container spacing={3}>
      {filteredData?.map(item => (
        <Grid item key={item.productId} xs={12} sm={3}>
          <Item item={item} handleAddToBasket={HandleAddToCart} />
        </Grid>
      ))}
    </Grid>
    </MediaQuery>
    <MediaQuery maxWidth={1024}>
    <Grid container spacing={3}>
      {filteredData?.map(item => (
        <Grid item key={item.productId} xs={12} sm={4}>
          <Item item={item} handleAddToBasket={HandleAddToCart} />
        </Grid>
      ))}
    </Grid>
    </MediaQuery>
    <MediaQuery maxWidth={600}>
    <Grid container spacing={3}>
      {filteredData?.map(item => (
        <Grid item key={item.productId} xs={12} sm={7}>
          <Item item={item} handleAddToBasket={HandleAddToCart} />
        </Grid>
      ))}
    </Grid>
    </MediaQuery>
    </Wrapper>
  );
};

export default AllProducts;
