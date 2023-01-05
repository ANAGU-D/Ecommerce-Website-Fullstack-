import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:60px;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
align-items:center
`
const Left = styled.div`
flex:1;
display: flex;
align-items:center
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;

`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const Logo= styled.h1`
font-weight:bold;

`
const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px;
`
function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>
                EN
              </Language>
              <SearchContainer>
                <Search style={{color:"gray", fontSize:16,}}/>
                <Input/>
              </SearchContainer>
            </Left>
            <Center><Logo>ANAGZ</Logo></Center>
            <Right>
            <MenuItems>REGISTER</MenuItems>
            <MenuItems>SIGN IN</MenuItems>
            <MenuItems>
                <Badge badgeContent={4} color="primary">
                   <ShoppingCartOutlined/>
                </Badge>
             </MenuItems>
            </Right>
        </Wrapper>  
    </Container>
  )
}

export default Navbar