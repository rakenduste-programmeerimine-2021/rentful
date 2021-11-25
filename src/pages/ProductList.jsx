import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

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


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Cars</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Cars</FilterText>
                    <Select>
                        <Option disabled selected>Make</Option>
                        <Option>BMW</Option>
                        <Option>Mercedes-Benz</Option>
                        <Option>Toyota</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Year</Option>
                        <Option>2010</Option>
                        <Option>2015</Option>
                        <Option>2020</Option>
                    </Select>
                
                
                
                </Filter>
                <Filter><FilterText>Sort Cars</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
