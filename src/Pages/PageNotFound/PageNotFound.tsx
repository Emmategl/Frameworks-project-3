import React from 'react';
import { Wrapper } from '../../App.styles';
import notFound from '../../Images/404.gif'

function PageNotFound() {

    return (
      <Wrapper>
      <h1>404: Page not found</h1>
       <img src={notFound} id="gif"  />
       </Wrapper>
      );
  }
  export default PageNotFound