import React from 'react'
import styled from 'styled-components'


const Container= styled.div``
const Title= styled.h1``
const Description= styled.p``
const InputContainer= styled.div``
const Input= styled.input``
const Button= styled.button``
function Newsletter() {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Description>Signup for our newsletter</Description>
        <InputContainer>
            <Input/>
             <Button>
                SIGNUP
             </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter