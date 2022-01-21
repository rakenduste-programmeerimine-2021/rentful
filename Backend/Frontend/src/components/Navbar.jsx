import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {useSelector } from "react-redux"
import { Link } from "react-router-dom";
import './style.css'
const Container = styled.div`
height: 100px;
background-color: #A28329;
`
const Container2 = styled.div`
height: 40px;
background-color: #575757;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
border-top: 2px solid #404040;
border-bottom: 2px solid #404040;
`
const Wrapper = styled.div`
height:100px;
display: flex;
justify-content: space-between;
align-items: center;

`

const Empty = styled.div`
flex: 1;
display: flex;
align-items: center;

`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;

`

const Center = styled.div`
flex: 1;
text-align: center;

`;

const Logo = styled.h1`
font-weight: bold;
font-size: 5em;

`

const Right = styled.div`

flex: 1;
align-items: center;
display: flex;
justify-content: center;

`;

const Right2 = styled.div`
height: 50px;
flex: 1;
display: flex;
justify-content: center;
align-items: center;

`;

const ButtonDiv = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: center;

`;

const Button = styled.button`
width: 100%;
height: 100%;
font-size: 20px;
background-color: #C09B31;
border: 1px solid black;
border-radius: 5px;
`
const Button2 = styled.button`
 width: 100%;
 height: 100%;
 background-color: #989898;
 border-radius: 5px;
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity) //siit võtame koguse, mis meil nimekirjas on
    console.log(quantity);
    return (
        <div>
            <Container>
                <Wrapper>
                    <Empty></Empty>
                    <Center>
                        <Logo>Rentful</Logo>
                    </Center>
                    <Right>
                        <Right2>
                            <Link className="link" to="/login">
                                <Button className="button">LOG IN</Button>
                            </Link>
                        </Right2>
                        <Right2>
                            <Link className="link" to="/register">
                                <Button className="button">REGISTER</Button>
                            </Link>
                        </Right2>

                        <Right2>
                            <Link className="link3" to="/cart">
                                <Button className="button">
                                    <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined/>
                                    </Badge>
                                </Button>
                            </Link>
                        </Right2>
                    </Right>
                </Wrapper>
            </Container>
            <Container2>
                <ButtonDiv> 
                        <Link className="link2" to="/">
                            <Button2 className="button2">HOME PAGE</Button2>
                        </Link>
                        <Link className="link2" to="/upload">
                            <Button2 className="button2">LIST YOUR CARS</Button2>
                        </Link>
                        <Link className="link2" to="/">
                            <Button2 className="button2">OUR SITES</Button2>
                        </Link>

                    </ButtonDiv>
            </Container2>
        </div>
    )
}

export default Navbar
