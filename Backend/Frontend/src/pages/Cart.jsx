import styled from "styled-components"
import React from 'react';
import Annoucement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Add from '../../node_modules/@material-ui/icons/Add'
import Remove from '../../node_modules/@material-ui/icons/Remove'
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;

`;

const Top = styled.div`
display: flex
align-items: center;
justify-content: space-between;
`;

const TopButton = styled.button`
padding: 10px
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"}
background-color: ${props=>props.type === "filled" ? "black" : "transparent"}
color: ${props=>props.type === "filled" && "white"}
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex: 3;
`;
const Summary = styled.div`
flex: 1;
background-color: red;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width:20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    return(
        <Container>
            <Navbar/>
            <Annoucement/>
            <Wrapper>
                <Title>YOUR ITEMS</Title>
                <Top>
                    <TopButton>CONTINUE</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled" >CHECKOUT</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>( //Iga asja kohta tehakse siin foreach tsükkel
                        <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID: </b> {product._id}</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                {product.price + "€"}
                                    <Remove/>
                                </ProductAmountContainer>

                            </PriceDetail>

                        </Product>
                        ))}
                    </Info>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart