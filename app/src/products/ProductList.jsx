import { Link } from "react-router-dom";
import UseProductList from "./useProductList";

const ProductList = (props) => {

    const { id } = props;

    const [products, status] = UseProductList(id);

    if (status.isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <ul className="list-group">
            {
                products.map((product, index) =>

                    <li key={index} value={product.name} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{product.name}</div>
                            Price is {product.price}$
                        </div>
                        <Link to={`/${product.id}`} className="badge bg-primary rounded-pill">{product.id}</Link>
                    </li>
                )
            }
        </ul>
    );
}

export default ProductList;