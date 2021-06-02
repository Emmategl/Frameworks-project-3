import AllProducts from "./Pages/AllProducts/AllProducts";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/NavigationBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/HomePage";
import Coffees from "./Pages/Coffees/Coffees";
import Teas from "./Pages/Teas/Teas";
import { LoginForm } from "./Pages/Login/LoginForm";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import ScrollUp from "./Components/ScrollUp";
import AboutUs from "./Pages/AboutUs/AboutUs";
import "./App.css";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollUp />
        <div className="main-container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/allproducts" component={AllProducts} />
            <Route path="/coffees" component={Coffees} />
            <Route path="/teas" component={Teas} />
            <Route path="/login" component={LoginForm} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/underconstruction" component={UnderConstruction} />
            <Route path="/404" component={PageNotFound} />
            <Route
              path="/:productId"
              render={(props) => <ProductDescription {...props} />}
            />
          </Switch>
        </div>
        <div className="footers">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
