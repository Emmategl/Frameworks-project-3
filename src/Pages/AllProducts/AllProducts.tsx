import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
// Components
import Item from '../../Components/Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// Styles
import { Wrapper, StyledButton } from '../../App.styles';
import React, { useContext, useEffect } from 'react';
import { HandleAddToCart } from '../../Components/BasketFunctionality';
import { BasketItemType } from "../../Components/BasketItemType";
import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { createStyles, withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { StyledLinearProgress } from '../../Components/StyledLinearProgress';
import { getAllProducts } from '../../Components/FetchFunctionality';
import { CheckBox } from '../../Components/Checkbox';
import { BoxContext, checkBoz } from '../../Components/CheckBoxContext';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

     

export const ProductList = () => {
  const boxContext = useContext(BoxContext)
  if (!boxContext)
  throw(new Error("FormContext is undefined!"))
  
  let checked = boxContext.checkBox.checked;
  let name = boxContext.checkBox.name
  const [checkBoxes, setCheckBoxes] = React.useState<checkBoz>({ checked: checked, name:name});

  const handleC = (event: { target: { name: string; checked: boolean; }; }) => {
    setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
};

  const { data, isLoading, error } = useQuery<BasketItemType[]>(
    'products',
    getAllProducts
    
  );

  if (isLoading) return <StyledLinearProgress color="primary"/>;
  if (error) return <div>Something went wrong ...</div>;

  if (checkBoxes.checked == true){
    var filtered = data?.filter(a => a.popularity == 1);
  }
  else{
    filtered = data
  }

  return (
    <Wrapper>
      <h1>All products</h1>
      <p>At 'Hot Liquids' you will always find a good selection of really delicious completely freshly roasted specialty coffee
        and tea in many flavours. We only sell coffee beans of the highest quality, so if you are looking for freshly roasted
        filter or espresso coffee, have a look at our large selection. We not only select our coffee carefully, but also our
        selection of teas. That is why you can find a wide range of exclusive and tasty teas with us.
        </p>
      <br></br>
  <FormGroup row>
  <FormControlLabel
    control={
    <Checkbox
    checked={checkBoxes.checked}
    onChange={handleC}
    name="checked" />}
    label="See our best selling products"
  />
  </FormGroup>
      <MediaQuery minWidth={1024}>
      <Grid container spacing={3}>
        {filtered?.map(item => (
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

export default ProductList;
