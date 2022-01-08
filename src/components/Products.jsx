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
    console.log("hello");
    useEffect(() => {
        const getProducts = async ()=>{
            try{
                const res = await axios.get( category ? `http://localhost:5000/api/products?category=${category}`:"http://localhost:5000/api/products" ); //valik, et ei kuvataks pakkumisi kõikjal ette
                console.log(res);
                setProducts(res.data);
            }catch(err){}
        };
        getProducts()
    }, [category]);

    useEffect(()=>{
        category && setFilteredProducts(  //See koodijupp kontrollib läbi filtrid ning filtreerib kõik tooted/autod ükshaaval läbi ning toob need visuualselt ette
            products.filter(item=>
                Object.entries(filters).every(([key,value]) =>
                item[key].includes(value)
                )
            )  
        );
    }, [category, filters])

    return (
        <Container>
            {filteredProducts.map (item=>(
                <Product item={item} key = {item.id}/>
            ))}
        </Container>
    )
}

export default Products
