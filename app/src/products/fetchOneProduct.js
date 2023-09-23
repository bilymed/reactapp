const FetchProductDetails = async ({ queryKey }) => {
    const id = queryKey[1];

    if(!id) return []

    const result = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!result.ok) {
        throw new Error('Nope')
    }

    return result.json();
}

export default FetchProductDetails;