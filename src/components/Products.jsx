import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import React, { useState, useEffect } from 'react';
import axios from "axios";
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({category, filters, sort}) => { //Siit algab andmete Fetchimine
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async ()=>{
            try{
                const res = await axios.get( category ? `http://localhost:5000/Backend/productList?category=${category}` : "http://localhost:5000/Backend/products" );
                console.log(res)
            }catch(err){}
        };
        getProducts()
    }, [category])

    return (
        <Container>
            {popularProducts.map (item=>(
                <Product item={item} key = {item.id}/>
            ))}
        </Container>
    )
}

export default Products
