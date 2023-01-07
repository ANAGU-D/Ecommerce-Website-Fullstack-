import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display:flex;
`
const Left= styled.div`
flex:1;
display:flex;
flex-direction:colomn;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`
const Logo = styled.h1``
const Description= styled.p``
const SocialMediaIcon = styled.div``
const SocialContainer=styled.div``

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>ANAGZ</Logo> 
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab magni cumque maiores vitae est eligendi deleniti odio ex pariatur!</Description>
        <SocialContainer>
        <SocialMediaIcon>
            <Facebook/>
        </SocialMediaIcon>
        <SocialMediaIcon>
            <Instagram/>
        </SocialMediaIcon>
        <SocialMediaIcon>
            <Twitter/>
        </SocialMediaIcon>
        </SocialContainer>
        
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer