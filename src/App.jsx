import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes, Navigate} //Uues versioonis ei ole enam "Switch", vaid "Routes"
        from "react-router-dom";

//Route'id on samuti umber tehtud
const App = () => {
  const user = true;
  return (
    <Router>  
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Cart" element={<Cart/>} />

          <Route path="/Login" render={(name) => <Navigate to="/" />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/Product/:id" element={<Product/>} />
          <Route path="/ProductList" element={<ProductList/>} />
          <Route path="/ProductList/:category" element={<ProductList/>}/>
          <Route path="*" element={<Navigate to="/" />}/> 
        </Routes>
    </Router>

  );

}

export default App;