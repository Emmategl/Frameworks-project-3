import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(176, 187, 170);
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }

  div {
   
    padding: 1rem 1rem 0rem 1rem;
    height: 100%;
  
  }

`;
