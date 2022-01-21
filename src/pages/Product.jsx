import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import "./style.css";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div``;

const PicturesContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: white;
padding: 10px;
`;
const ImgContainer = styled.div`
width: 40vw;
height: 40vh;
border: 2px solid black;
`;
const Image = styled.img`
width: 100%;
height: 100%;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 200;
font-weight: bold;
margin-left: 5vw;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;
const EquipmentHolder = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`;


const EquipmentContainer = styled.div`
background-color: #D2D2D2;
width: 85vw;
text-align: center;
border: 5px solid black;
border-radius: 25px;
`;
const EquipmentTitle = styled.h2`

`;
const Equipment = styled.div``;
const EquipmentText = styled.div``;

const OwnerHolder = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`;

const OwnerContainer = styled.div`
background-color: #D2D2D2;
width: 85vw;
text-align: center;
border: 5px solid black;
border-radius: 25px;
`;
const OwnerTitle = styled.h2``;
const OwnerInfo = styled.div``;

const CompanyHolder = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;
width: 40vw;
`;

const CompanyContainer = styled.div`
background-color: #D2D2D2;
width: 25vw;
text-align: center;
border: 5px solid black;
border-radius: 25px;
`;

const CompanyTitle = styled.h2``;

const CompanyPhone = styled.div`

`;

const CompanyMail = styled.div`

`;

const AddToList = styled.button`

`;




const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    },[id])

    const handleClick = ()=>{
        //Siin uuendame oma vaatenimekirja
        dispatch(addProduct({product, quantity}));
        
    }
    return (
        <Container className="productPage">
            <Navbar/>
            <Title>sdsadasdss</Title>
            <PicturesContainer>

                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>

            </PicturesContainer>

            <EquipmentHolder>
                <EquipmentContainer>
                    <EquipmentTitle>Car description</EquipmentTitle>
                    <Equipment>
                        <EquipmentText>{product.desc}</EquipmentText>
                    </Equipment>
                </EquipmentContainer>
            </EquipmentHolder>

            <OwnerHolder>
                <OwnerContainer>
                    <OwnerTitle>Owner's description</OwnerTitle>
                    <OwnerInfo>Very pog car, definitely works like new</OwnerInfo>
                    <OwnerInfo>No refunds btw</OwnerInfo>
                </OwnerContainer>
            </OwnerHolder>

            <CompanyHolder>
                <CompanyContainer>
                    <CompanyTitle>Company information</CompanyTitle>
                    <CompanyPhone>Phone number: 6942069</CompanyPhone>
                    <CompanyMail>E-Mail: example@epico.ru</CompanyMail>
                </CompanyContainer>
            </CompanyHolder>
            <AddToList onClick ={handleClick}>Add to List</AddToList>
            <Footer/>
        </Container>
    )
}

export default Product