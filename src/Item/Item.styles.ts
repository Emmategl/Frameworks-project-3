import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid rgb(176, 187, 170);
  height: 100%;

  /* button { */
  /*   border-radius: 0 0 20px 20px; */
  /*   width: 50%; */
  /* } */

  img {
    height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
