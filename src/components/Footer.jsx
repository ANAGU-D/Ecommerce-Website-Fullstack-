import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display:flex;
`
const Left= styled.div`
flex:1;
padding:20px;
margin-top:-2%;
`
const Center = styled.div`
flex:1;
padding:20px;
`
const Right = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
margin-bottom:20px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Logo = styled.h1`
padding:20px
`
const Description= styled.p`
margin:20px;
`
const SocialMediaIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
justify-content:center;
margin:20px;
align-items:center;
`
const SocialContainer=styled.div`
display:flex;
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`
const Payment = styled.img`
width:60%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>ANAGZ</Logo> 
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab magni cumque maiores vitae est eligendi deleniti odio ex pariatur!</Description>
        <SocialContainer>
        <SocialMediaIcon color='3B5999'>
            <Facebook/>
        </SocialMediaIcon>
        <SocialMediaIcon color='E4405F'>
            <Instagram/>
        </SocialMediaIcon>
        <SocialMediaIcon color='55ACEE'>
            <Twitter/>
        </SocialMediaIcon>
        </SocialContainer>
        
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Traking</ListItem>
                <ListItem>WIshList</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
              <ContactItem>
                <Room style={{marginRight:'10px'}}/> 622 Dixie Path, SOuth Tobinchester 98336
                </ContactItem> 
                <ContactItem>
                 <Phone style={{marginRight:'10px'}}/> +1 234 556 6755
                </ContactItem>
                <ContactItem>
                <Mail style={{marginRight:'10px'}}/> contact@anagz.com
                </ContactItem>
                <Payment src='/images/payment.png'/>
            </Title> 
        </Right>
    </Container>
  )
}

export default Footer