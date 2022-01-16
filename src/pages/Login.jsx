import styled from "styled-components"
import React from 'react'
import { useState } from "react";
import Navbar from "../components/Navbar"
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: pink;
`;

const Container2 = styled.div`
width: 100vw;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
width: 20%;
padding: 20px;
background-color: gray;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
text-align: center;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
padding: 20px;
`;

const Input = styled.input`
flex: 1;
min-width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;


const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: blue;
color: white;
cursor: pointer;
&:disabled{
    color: red;
    cursor: not-allowed;
}
`;

const Link = styled.a`
margin: 25px;
text-decoration: underline;
cursor: pointer;
`;

const Error = styled.span`
  color:red;
`;

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault(); //preventDefault on selleks, et leht ei refreshiks
        login(dispatch, {username, password});
    }
    return(
        <div>
        <Container>
            <Navbar/>
            <Container2>
                <Wrapper> 
                    <Title>RENTFUL</Title>
                    <Form>
                        <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Link>FORGOT PASSWORD?</Link>
                        <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                        {error && <Error>Something went wrong</Error>}
                        <Link>CREATE AN ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container2>
        </Container>
        </div>
    )
}

export default Login