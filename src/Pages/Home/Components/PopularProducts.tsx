import { useQuery } from "react-query";
import MediaQuery from "react-responsive";
import React, { useContext } from "react";
import Item from "../../../Components/Item/Item";
import { getPopularProducts } from "../../../Components/FetchFunctionality";
import { BasketItemType } from "../../../Components/BasketItemType";
import { HandleAddToCart } from "../../../Components/BasketFunctionality";
import { FormContext } from "../../Login/FormContext";
import { FormData } from "../../Login/LoginForm";
import { Wrapper } from "../../../App.styles";
import Grid from "@material-ui/core/Grid";

export const PopularProducts = () => {
  //get the formContext where the name of the customer is stored
  const formContext = useContext(FormContext);
  if (!formContext) throw new Error("FormContext is undefined!");

  let firstName = formContext.login.firstName;
  let lastName = formContext.login.lastName;
  let email = formContext.login.email;
  const [state, setState] = React.useState<FormData>({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  //Retrieve the list of popular products
  const { data, error } = useQuery<BasketItemType[]>(
    "products",
    getPopularProducts
  );

  if (error)
    return <div>Sorry something went wrong when fetching the products ...</div>;

  return (
    <Wrapper>
      {state.firstName ? (
        <>
          <h2>{state.firstName}, see our best selling products</h2>
        </>
      ) : (
        <h2>See our best selling products</h2>
      )}
      <br></br>
      <MediaQuery minWidth={1024}>
        <Grid container spacing={3}>
          {data?.map(
            (item, index) =>
              index < 4 && (
                <Grid item key={item.productId} xs={12} sm={3}>
                  <Item item={item} handleAddToBasket={HandleAddToCart} />
                </Grid>
              )
          )}
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <Grid container spacing={3}>
          {data?.map(
            (item, index) =>
              index < 3 && (
                <Grid item key={item.productId} xs={12} sm={4}>
                  <Item item={item} handleAddToBasket={HandleAddToCart} />
                </Grid>
              )
          )}
        </Grid>
      </MediaQuery>
    </Wrapper>
  );
};

export default PopularProducts;
