import React from 'react';
import logo from "./Images/logo.svg";
/* import './App.css'; */
import ProductList from './Components/allproducts';
import NavBar from './Components/navBar';
import Footer from './Components/footer';
import Nav from './Components/nav';
import { MuiThemeProvider, createMuiTheme, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const MyButton = styled(Button)({
  background: 'rgb(224, 230, 221)',
  '&:hover': {
    background: "rgb(176, 187, 170)",
    color: 'black',
    boxShadow: '0 1px 1px 1px rgb(176, 187, 170)'
 },
  border: 0,
  borderRadius: 3,
  boxShadow: '0 1px 1px 1px rgb(176, 187, 170)',
  color: 'black',
  height: 48,
  padding: '0 30px',
});

export const MyButtonGrid = styled(Button)({
  color: 'black',
  '&:hover': {
    color: 'black',
 }
});

function App(){
  return (
    <>
    {/* <NavBar/> */}
    <Nav/>
    <Footer/>
    </>
  );
}

export default App;
