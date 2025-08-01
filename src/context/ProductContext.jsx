import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState(null);
    const [alert, setAlert] = useState({
        type: "info",
        message: null,
    });

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                alert,
                setAlert,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

function useProductContext() {
    return useContext(ProductContext);
}

export { ProductProvider, useProductContext };
