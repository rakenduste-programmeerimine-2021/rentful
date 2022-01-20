import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
const Container = styled.div`

`;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option`

`;

//Saame omale automargi
const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2] 
    const [filters, setFilters] = useState([]) // filtrite loomine
    const [sort, setSort] = useState("newest")


    const selectFilters =  (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters, //See rida on oluline, et mitu filtrit saaksid korraga töötada. Seda nimetatakse "Spread operatoriks", mille eesmärk on hoida kõiki elemente Arrays
            [e.target.name]: value,
        
        });
    };

    console.log(filters);
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Cars</FilterText>
                    <Select name="color" onChange={selectFilters}>
                        <Option disabled selected>Color</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Gray</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select name="year" onChange={selectFilters}>
                        <Option disabled selected>Year</Option>
                        <Option>2010</Option>
                        <Option>2014</Option>
                        <Option>2020</Option>
                    </Select>
                
                
                
                </Filter>
                <Filter><FilterText>Sort Cars</FilterText>
                <Select onChange = {e => setSort(e.target.value)}>
                    <Option value = "newest">Newest</Option>
                    <Option value = "cheapest">Price (asc)</Option>
                    <Option value = "expensive">Price (desc)</Option>
                </Select>
                
                </Filter>
            </FilterContainer>
            <Products category = {category} filters = {filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
