import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

const Header = () => {
    const [Categories, setCateories ] = useState([]);
    const setActive = ({ isActive }) =>(isActive ? " active" : "");  

    useEffect(() => {
        axios('https://fakestoreapi.com/products/')
        .then =(({data}) => setCateories(data));
    }, [])
    return (
        <div>
            <NavLink to={' / '}>Home</NavLink>
            <NavLink to={' / '}>page</NavLink>
            {
                Categories.map(item =>{
                    return<NavLink className={setActive} key={item} to={`/products${item}?limit=5`}>{item}</NavLink>
                })
            }
            
        </div>
    );
}

export default Header;
