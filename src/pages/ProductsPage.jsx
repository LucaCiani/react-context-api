import ProductsList from "../assets/components/ProductsList";

export default function Products() {
    return (
        <>
            <h1>OUR PRODUCTS</h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
                <ProductsList />
            </div>
        </>
    );
}
