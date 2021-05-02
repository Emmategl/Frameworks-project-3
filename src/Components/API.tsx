export const getProductDetails = async (productId: any) => {
    try {
      const response = await (await fetch(`http://localhost:3000/products/${productId}`)).json;
      // console.log(response.data);
      return response
    } catch (err) {
      console.error(
        `There was a problem finding the details of this movie: ${err}`,
      );
      throw err;
    }
  };