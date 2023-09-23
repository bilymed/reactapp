import { useQuery } from "@tanstack/react-query";
import FetchProductList from "./fetchProducts";

const UseProductList = (category) => {
    const result = useQuery(["listProducts", category], FetchProductList);

    return [result?.data?.products ?? result?.data?.product ?? [], result.status]
}

export default UseProductList;