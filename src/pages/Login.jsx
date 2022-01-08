import styled from "styled-components"
import React from 'react'
import Navbar from "../components/Navbar"

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
`;

const Link = styled.a`
margin: 25px;
text-decoration: underline;
cursor: pointer;
`;



const Login = () => {
    return(
        <div>
        <Container>
            <Navbar/>
            <Container2>
                <Wrapper> 
                    <Title>RENTFUL</Title>
                    <Form>
                        <Input placeholder="username"/>
                        <Input placeholder="password"/>
                        <Link>FORGOT PASSWORD?</Link>
                        <Button>LOGIN</Button>
                        <Link>CREATE AN ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container2>
        </Container>
        </div>
    )
}

export default Login