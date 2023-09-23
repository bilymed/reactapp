const FetchCategoryList = async () => {
    const res = await fetch('http://localhost:3000/api/categories');

    if (!res.ok) {
        throw new Error('Nope')
    }

    return res.json();
}

export default FetchCategoryList;