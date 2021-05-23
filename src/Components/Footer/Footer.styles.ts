import styled from 'styled-components';

export const FooterWrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

  .footer {
    display: flex;
    background-color:  rgb(224, 230, 221);
    /* padding: 3%;
    width: 100%;
    margin-top: auto */
   }

   
.navigation {
  flex: 1;
  padding-right: 3%;
}
.information {
  flex: 1;
  padding-right: 3%;
}
.contact {
  flex: 1;
  padding-right: 3%;
}

a {
  color: black;
  padding: 0;
  text-decoration: none;
  
}

footer a {
  color: black;
  text-decoration: none;
  
}

footer a {
  color: black;
  text-decoration: none;
  padding-left: 2%;
  font-size: 17px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  
}

footer li{
  padding-bottom: 20px;
}
`;
