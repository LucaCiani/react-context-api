import { useProductContext } from "../../context/ProductContext";
import ProductsCard from "./ProductsCard";

export default function ProductsList() {
    // const [products, setProducts] = useState([]);

    // const productsUrl = "https://fakestoreapi.com/products";

    // useEffect(() => {
    //     fetch(productsUrl)
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data));
    // }, []);

    const { products } = useProductContext();
    console.log(products);

    return (
        <>
            {products &&
                products.map((product) => {
                    return <ProductsCard key={product.id} product={product} />;
                })}
        </>
    );
}
