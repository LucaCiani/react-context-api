import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUs from "./pages/AboutUs";
import SingleProduct from "./pages/SingleProduct";
import { ProductProvider } from "./context/ProductContext";

function App() {
    return (
        <ProductProvider>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route path="/" Component={HomePage} />
                        <Route path="/products" Component={ProductsPage} />
                        <Route path="/about-us" Component={AboutUs} />
                        <Route path="/products/:id" Component={SingleProduct} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductProvider>
    );
}

export default App;
