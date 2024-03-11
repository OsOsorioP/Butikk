import  {Navbar}  from "./components/Navbar";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import  {All}  from "./components/categories_pages/All";
import  {Furnitures}  from "./components/categories_pages/Furnitures";
import { Electronics } from "./components/categories_pages/Electronics";
import { Lamps } from "./components/categories_pages/Lamps";
import { Kitchen } from "./components/categories_pages/Kitchen";
import { Chairs } from "./components/categories_pages/Chairs";
import { SkinCare } from "./components/categories_pages/SkinCare";
import  React, {useState}  from "react";

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProduct, setCountProduct] = useState(0)
  return (
    <>
      <Navbar
        allProducts={allProducts} setAllProducts={setAllProducts}
        total={total} setTotal={setTotal}
        countProduct={countProduct} setCountProduct={setCountProduct}

      />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage
          allProducts={allProducts} setAllProducts={setAllProducts}
          total={total} setTotal={setTotal}
          countProduct={countProduct} setCountProduct={setCountProduct}
        />} />
        <Route path="*" element={ <Navigate to="/" replace/> }/>
      </Routes>
    </>

  );
}

export default App;
