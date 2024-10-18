import { useState, useEffect } from "react";
import axios from 'axios'


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(item =>{
                    return <h2>{item.title}</h2>
                })
            }
            
            
        </div>
    );
}

export default Home;
