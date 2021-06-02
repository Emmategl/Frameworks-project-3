import { useQuery } from "react-query";
import Item from "../../Components/Item/Item";
import Grid from "@material-ui/core/Grid";
import { HandleAddToCart } from "../../Components/BasketFunctionality";
import { Wrapper } from "../../App.styles";
import { BasketItemType } from "../../Components/BasketItemType";
import MediaQuery from "react-responsive";
import { StyledLinearProgress } from "../../Components/StyledLinearProgress";
import { getTeas } from "../../Components/FetchFunctionality";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const Teas = () => {
  //Make a state for the checkbox
  const [checkBoxes, setCheckBoxes] = React.useState({ checked: false });

  const handleC = (event: { target: { name: string; checked: boolean } }) => {
    setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
  };

  //Retrieve the list of products
  const { data, isLoading, error } = useQuery<BasketItemType[]>(
    "products",
    getTeas
  );

  if (isLoading) return <StyledLinearProgress />;
  if (error)
    return <div>Sorry something went wrong when fetching the products ...</div>;

  //Check if the checkbox is checked. If it is, filter the list of products based on popularity.
  if (checkBoxes.checked == true) {
    var filteredData = data?.filter((item) => item.popularity == 1);
  } else {
    filteredData = data;
  }

  return (
    <Wrapper>
      <h1>Teas</h1>
      <p>
        We not only select our coffee carefully, but also our selection of teas.
        That is why you can find a wide range of exclusive and tasty teas with
        us. Are you mostly into green, black or white tea? We have many exciting
        flavors and types of tea, so you can find the one that suits your taste
        buds. We only deal with the best suppliers so we can ensure that you get
        the best possible quality.
      </p>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkBoxes.checked}
              onChange={handleC}
              name="checked"
            />
          }
          label="See our best selling teas"
        />
      </FormGroup>
      <MediaQuery minWidth={1024}>
        <Grid container spacing={3}>
          {filteredData?.map((item) => (
            <Grid item key={item.productId} xs={12} sm={3}>
              <Item item={item} handleAddToBasket={HandleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <Grid container spacing={3}>
          {filteredData?.map((item) => (
            <Grid item key={item.productId} xs={12} sm={4}>
              <Item item={item} handleAddToBasket={HandleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <Grid container spacing={3}>
          {filteredData?.map((item) => (
            <Grid item key={item.productId} xs={12} sm={7}>
              <Item item={item} handleAddToBasket={HandleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </MediaQuery>
    </Wrapper>
  );
};

export default Teas;
