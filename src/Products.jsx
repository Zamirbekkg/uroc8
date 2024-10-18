import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Products = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    useEffect(() => {
        axios('https://fakestoreapi.com/products/')
        .then =(({data}) => useParams(data));
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default Products;
