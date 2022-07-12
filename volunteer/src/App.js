

//import ProductList from "./pages/productList";
//import Product from "./pages/product/Product";
//import NewProduct from "./pages/newProduct/NewProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {Product, ProductList,Home,Login, List, Single, New} from './pages'

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Issue Ration" />}
              />
            </Route>
        {/* <Route path='products' element={<ProductList/>} />
        <Route path='products/:productId' element={<Product/>} />
        <Route path='newproduct' element={<NewProduct/>} /> */}
        <Route path="product">
              <Route index element={<ProductList/>} />
              <Route path=":productId" element={<Product/>} />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
