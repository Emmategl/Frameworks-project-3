import styled from 'styled-components';

export const BasketItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid rgb(176, 187, 170);
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 120px;
    object-fit: cover;
    margin: 20px;
  }
`;
