import React from 'react';
import logo from "./Images/logo.svg";
/* import './App.css'; */
import ProductList from './Components/allproducts';
import NavBar from './Components/navBar';
import Footer from './Components/footer';
import Nav from './Components/nav';


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
