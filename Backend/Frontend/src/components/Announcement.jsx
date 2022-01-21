import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
align-items: center;
font-size: 14px;
font-weight: 500;
display: flex;
justify-content: center;
`

export const Announcement = () => {
    return (
        <Container>
            Christmas Deal!!! 10% off all rentals!!!
        </Container>
    )
}


export default Announcement