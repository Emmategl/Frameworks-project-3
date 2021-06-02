// React
import { useQuery } from 'react-query';
// Components
import Item from '../../Components/Item/Item';
import Grid from '@material-ui/core/Grid';
// Functions
import { HandleAddToCart } from '../../Components/BasketFunctionality';
// Styles
import { Wrapper} from '../../App.styles';
// Types
import { BasketItemType } from '../../Components/BasketItemType';
import MediaQuery from 'react-responsive';
import { StyledLinearProgress } from '../../Components/StyledLinearProgress';
import { getTeas } from '../../Components/FetchFunctionality';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { useContext, useState } from 'react';
import { BoxContext, checkBoz } from '../../Components/CheckBoxContext';
import React from 'react';


const Teas = () => {

  const boxContext = useContext(BoxContext)
  if (!boxContext)
  throw(new Error("FormContext is undefined!"))
  
  let checked = boxContext.checkBox.checked;
  let name = boxContext.checkBox.name
  const [checkBoxes, setCheckBoxes] = useState<checkBoz>({ checked: checked, name:name});

  const handleC = (event: { target: { name: string; checked: boolean; }; }) => {
    setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
};

  const { data, isLoading, error } = useQuery<BasketItemType[]>(
    'products',
    getTeas
  );

  if (isLoading) return <StyledLinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  if (checkBoxes.checked == true){
    var filteredData = data?.filter(item => item.popularity == 1);
  }
  else{
    filteredData = data
  }

  return (
    <Wrapper>
      <h1>Teas</h1>
      <p>
      We not only select our coffee carefully, but also our selection of teas. That is why you can find
      a wide range of exclusive and tasty teas with us. Are you mostly into green, black or white tea?
      We have many exciting flavors and types of tea, so you can find the one that suits your taste buds.
      We only deal with the best suppliers so we can ensure that you get the best possible quality. 
      </p>
      <br></br>
      <FormGroup row>
      <FormControlLabel
        control={
        <Checkbox
        checked={checkBoxes.checked}
        onChange={handleC}
        name="checked" />}
        label="See our best selling teas"
      />
      </FormGroup>
      <MediaQuery minWidth={1024}>
      <Grid container spacing={3}>
        {filteredData?.map(item => (
          <Grid item key={item.productId} xs={12} sm={3}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>

      <MediaQuery maxWidth={1024}>
      <Grid container spacing={3}>
        {filteredData?.map(item => (
          <Grid item key={item.productId} xs={12} sm={4}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>

      <MediaQuery maxWidth={600}>
      <Grid container spacing={3}>
        {filteredData?.map(item => (
          <Grid item key={item.productId} xs={12} sm={7}>
            <Item item={item} handleAddToCart={HandleAddToCart} />
          </Grid>
        ))}
      </Grid>
      </MediaQuery>
    </Wrapper>
  );
};

export default Teas;
