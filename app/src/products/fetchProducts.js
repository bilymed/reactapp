const FetchProductList = async ({ queryKey }) => {

    const id = queryKey[1] == 0 ? '' : queryKey[1];

    const res = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!res.ok) {
        throw new Error('Nope')
    }

    return res.json();
}

export default FetchProductList;