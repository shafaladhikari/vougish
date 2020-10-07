import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./users/pages/Login";
import Register from "./users/pages/Register";
import NavHeader from "./shared/components/Navigation/NavHeader";
import Header from "./shared/components/Header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Footer from "./shared/components/Footer/Footer";
import ProductMain from "./components/ProductMain";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Header />
        <NavHeader />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/products/:productId" component={ProductMain} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
