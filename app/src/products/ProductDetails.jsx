import { useParams } from "react-router-dom";
import FetchProductDetails from "./fetchOneProduct";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "../ErrorBoundary";

const ProductDetails = () => {
    const { id } = useParams();
    const result = useQuery(['Details', id], FetchProductDetails)


    if (result.isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    const product = result.data.product[0];

    const style = {
        width: '18rem',
    };

    return (
        <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <ProductDetails {...props} />
        </ErrorBoundary>
    );
}