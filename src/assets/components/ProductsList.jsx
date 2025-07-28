import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    const productsUrl = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(productsUrl)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            {products &&
                products.map((product) => {
                    return (
                        <div key={product.id} className="col">
                            <Link
                                to={`${product.id}`}
                                className="link-underline link-underline-opacity-0"
                            >
                                <div className="card h-100">
                                    <img
                                        className="card-img-top"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {product.title}
                                        </h5>
                                        <p>
                                            <b>€ {product.price}</b>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
        </>
    );
}
