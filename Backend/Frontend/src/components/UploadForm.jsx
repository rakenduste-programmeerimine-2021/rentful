import styled from 'styled-components';
import "./style.css"
import react, { useEffect, useState } from "react";
import  axios  from "axios";
//const mongoose = require('mongoose');


const Form = styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
padding: 20px;
border: 2px solid black;
border-radius: 10px;
width: 30%;
background-color: #CECECE;
`;

const Container = styled.div`

`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Input = styled.input`
flex: 1;
width: 80%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const InputDesc = styled.input`
flex: 1;
width: 80%;
height: 100%;
margin: 20px 10px 0px 0px;
padding: 10px;
margin-bottom: 50px;
`;

const Button = styled.button`
width: 40%;
border: 2px solid black;
padding: 15px 20px;
background-color: blue;
color: white;
cursor: pointer;
&:disabled{
    color: red;
    cursor: not-allowed;
}
`;

const Title = styled.h1`
margin-top: 10px;
margin-bottom: 50px;
font-size: 24px;
font-weight: 300;
text-align: center;
`;



const UploadForm = () => {

    const [mark,setMark]=useState()
    const [color,setColor]=useState()
    const [year,setYear]=useState()
    const [price,setPrice]=useState()
    const [description,setDescription]=useState()
    const [picture,setPicture]=useState()

    const updateMark = (event) => { //Uuendame väärtusi
        setMark(event.target.value)
    }

    const updateColor = (event) => {
        setColor(event.target.value)
    }

    const updateYear = (event) => {
        setYear(event.target.value)
    }

    const updatePrice = (event) => {
        setPrice(event.target.value)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    const updatePicture = (event) => {
        setPicture(event.target.value)
    }

    const handleClick = (e) => {
        console.log("Works")
        e.preventDefault(); 
        const newObject = { 
            title: mark,
            desc: description,
            img: picture,
            categories: mark,
            color: color,
            price: price,
            model: mark,
            year: year,
        }
        axios.post('http://localhost:5000/create', newObject )
        
    }

    return(
        <Container>
            <Title>Upload your car</Title>
            <Wrapper>
                <Form>
                    <Input placeholder="mark" onChange={updateMark} ></Input>
                    <Input placeholder="color" onChange={updateColor}></Input>
                    <Input placeholder="year" onChange={updateYear} type="number"></Input>
                    <Input placeholder="price" onChange={updatePrice} type="number"></Input>
                    <Input placeholder="picture URL" onChange={updatePicture}></Input>
                    <InputDesc placeholder="description" onChange={updateDescription}></InputDesc>
                    <Button type="submit" onClick={e => handleClick(e)} className="confirmUpload">Confirm</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default UploadForm