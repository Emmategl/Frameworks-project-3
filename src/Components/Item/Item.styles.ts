import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(176, 187, 170);
  height: 100%;

  /* button { */
  /*   border-radius: 0 0 20px 20px; */
  /*   width: 100%; */
  /* } */

  img {
    height: 100%;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem 1rem 0rem 1rem;
    height: 100%;
   
  
  }

`;
