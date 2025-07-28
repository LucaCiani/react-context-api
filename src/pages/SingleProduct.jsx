import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleProduct() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [singleProduct, setSingleProduct] = useState({});

    const producstUrl = "https://fakestoreapi.com/products/";

    useEffect(() => {
        fetch(producstUrl + id)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, [id]);

    const currentId = parseInt(id, 10);
    const nextId = currentId + 1;
    const prevId = currentId - 1;

    return (
        <div>
            <button
                className="btn btn-warning"
                onClick={() => {
                    navigate(-1);
                }}
            >
                ◀️Previous page
            </button>
            <div className="card">
                <img src={singleProduct.image} alt={singleProduct.title} />
                <div className="card-body">
                    <h3 className="card-title">{singleProduct.title}</h3>
                    <p>
                        <b>€ {singleProduct.price}</b>
                    </p>
                    <p>
                        <b>CATEGORY: </b> {singleProduct.category}
                    </p>
                    <p>
                        <b>DESCRIPTION: </b>
                    </p>
                    <p>{singleProduct.description}</p>
                </div>
            </div>
            <button
                onClick={() => {
                    if (prevId > 0) navigate("/products/" + prevId);
                }}
                className="btn btn-info"
            >
                Previous product
            </button>
            <button
                onClick={() => {
                    navigate("/products/" + nextId, {});
                }}
                className="btn btn-info"
            >
                Next product
            </button>
        </div>
    );
}
