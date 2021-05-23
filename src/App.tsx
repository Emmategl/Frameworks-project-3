import React from 'react';
import ProductList from './Pages/AllProducts/AllProducts';
import Footer from './Components/Footer';
import Nav from './Components/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/HomePage';
import Coffees from './Pages/Coffees/Coffees';
import Teas from './Pages/Teas/Teas';
import { LoginForm } from './Pages/Login/LoginForm';
import ProductDescription from './Pages/ProductDescription/ProductDescription';
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction';
import ScrollUp from './Components/ScrollUp';
/* import './App.css'; */

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
