import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`

`

const Message = styled.div`
text-align: center;
font-size: 30px;
`
const Message2 = styled.div`
text-align: center;
font-size: 50px;
`

const WelcomeText = () => {
    return (
        <Wrapper>
            <Message>Welcome to</Message>
            <Message2>Rentful</Message2>
        </Wrapper>
    )
}

export default WelcomeText
