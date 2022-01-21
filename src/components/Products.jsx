import styled from "styled-components";
import { popularProducts } from "../data";
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
                const res = await axios.get( category ? `http://localhost:5000/api/products?category=${category}`:"http://localhost:5000/api/products" ); //valik, et ei kuvataks pakkumisi kõikjal ette
                console.log(res);
                console.log("hello");
                setProducts(res.data);
            }catch(err){}
        };
        getProducts()
    }, [category]);
    
    useEffect(()=>{
        category && setFilteredProducts(  //See koodijupp kontrollib läbi filtrid ning filtreerib kõik tooted/autod ükshaaval läbi ning toob need visuualselt ette
            products.filter((item) =>
                Object.entries(filters).every(([key,value]) =>

                item[key].includes(value)
                )
            )  
        );
    }, [products, category, filters])
   
    useEffect(()=>{
        if(sort === "newest"){
            setFilteredProducts(prev=>
            [...prev].sort((a,b)=>a.createdat - b.createdAt)) //prev hoiab filtreeritud asju enda sees. teisel pool on sorteerimisalgoritm a - b ning createdAt on aeg, millal toode lisati. Kui a on b'st suurem, kuvatakse uusimad tooted.
        }
        else if(sort === "ascending"){
            setFilteredProducts(prev=>
            [...prev].sort((a,b)=>a.price - b.price))//Siin sama idee, kuid seekord vaatama hindasid 
        }

        else {
            setFilteredProducts(prev=>
            [...prev].sort((a,b)=>b.price - a.price)) 
        }

    }, [sort]);
 
    return (
        <Container>
            {category//products juures tundub olevat error, ei oska praegu lahendada rida 60 //Siin on jah/ei, et me saaks näidata koduleheküljel olemasolevaid sõidukeid/tooteid, kuni kaheksa
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)} 
        </Container>
    )
}

export default Products
