import React from 'react';
import ProductList from './Pages/AllProducts/AllProducts';
import Footer from './Components/Footer';
import Nav from './Components/NavigationBar';
import { MuiThemeProvider, createMuiTheme, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/HomePage';
import Coffees from './Pages/Coffees/Coffees';
import Teas from './Pages/Teas/Teas';
import { LoginForm } from './Pages/Login/LoginForm';
import ProductDescription from './Pages/ProductDescription/ProductDescription';
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction';
import ScrollUp from './Components/ScrollUp';



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
  margin: "4px",
});

export const MyButtonGrid = styled(Button)({
  color: 'black',
  '&:hover': {
    color: 'black',
 }
});

export const MyButtonProductPage = styled(Button)({
  background: 'rgb(224, 230, 221)',
  color: 'black',
  '&:hover': {
    color: 'black',
 }
});


function App(){
  return (
    <>
     <BrowserRouter>
     <ScrollUp />
    <div className="main-container">
    <Nav/>
    <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/allproducts" component={ProductList} />
                <Route path="/coffees" component={Coffees} />
                <Route path="/teas" component={Teas} />
                <Route path="/login" component={LoginForm} />
                <Route path="/underconstruction" component={UnderConstruction} />
                <Route path="/:productId" render={(props) => <ProductDescription {...props} />} />
    </Switch>
    </div>
    <div className="footers">
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
