import React from 'react'
import Navbar from "../components/Navbar"
import UploadForm from '../components/UploadForm'
import styled from "styled-components"
const Container = styled.div`

`
const Upload = () => {
    return(
        <Container>
            <Navbar/>
            <UploadForm/>
        </Container>
    )
}

export default Upload