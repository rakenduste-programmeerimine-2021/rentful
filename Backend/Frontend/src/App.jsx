import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const App = () => {
  const user = useSelector((state) =>state.user.currentUser); //Siin paneme paika, kus mingi element asub, kasutades route
  return (
    <Router>  
        <Switch>

        <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/cart">
            <Cart/>
          </Route>

          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login/>}
            <Login/>
          </Route>

          <Route path="/register">
            {user ? <Redirect to="/"/> : <Register/>}
          </Route>

          <Route path="/product/:id"> 
            <Product/>
          </Route>

          <Route path="/productList/:category">
            <ProductList/>
          </Route>
          <Route path="/upload">
            <Upload/>
          </Route>
        </Switch>       
    </Router>

  );

}

export default App;