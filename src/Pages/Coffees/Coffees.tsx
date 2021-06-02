
import { useQuery} from 'react-query';
// Components
import Item from '../../Components/Item/Item';
import Grid from '@material-ui/core/Grid';
// Styles
import { Wrapper} from '../../App.styles';
// Types
import { BasketItemType } from '../../Components/BasketItemType';
import { HandleAddToCart } from '../../Components/BasketFunctionality';
import MediaQuery from 'react-responsive';
import { StyledLinearProgress } from '../../Components/StyledLinearProgress';
import { getCoffees } from '../../Components/FetchFunctionality';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { useContext, useState } from 'react';
import { BoxContext, checkBoz } from '../../Components/CheckBoxContext';

const Coffees = () => {
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
    getCoffees
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
      <h1>Coffees</h1>
      <p>Here you will always find a good selection of really delicious completely freshly roasted specialty coffee
        in many flavors. We only sell coffee beans of the highest quality, so if you are looking for freshly roasted
        filter or espresso coffee, have a look at our large selection. With us, you also have the opportunity to buy
        raw / green coffee beans if you think it's fun to roast your coffee yourself. 
      </p>
      <br></br>
      <FormGroup row>
  <FormControlLabel
    control={
    <Checkbox
    checked={checkBoxes.checked}
    onChange={handleC}
    name="checked" />}
    label="See our best selling coffees"
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

export default Coffees;
