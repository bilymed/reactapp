import { useState, useContext, lazy, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import FetchCategoryList from "./FetchCategoryList";
// import ProductList from "../products/ProductList";
import UserContext from "../UserContext";

const ProductList = lazy(() => import("../products/ProductList"));

const CategoryList = () => {

    const result = useQuery(["listCategories"], FetchCategoryList);
    const categories = result?.data?.categories ?? [];
    const [id, setId] = useState(0);
    const [user] = useContext(UserContext);

    if (result.isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <div>
            <h1>{user}</h1>
            <select className="form-select mb-4" onChange={(e) => setId(e.target.value)}>
                <option></option>
                {
                    categories.map((category) =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )
                }

            </select>
            <Suspense fallback={
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }>
                <ProductList id={id} />
            </Suspense>
        </div>
    )
}

export default CategoryList;