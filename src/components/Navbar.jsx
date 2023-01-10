import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  height:60px;
  ${mobile({width:'100%', height: '10%'})}
`;
const SearchContainer = styled.div`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
${mobile({width: '100%', marginLeft:'25%', padding:'2%'})}
`;
const Input = styled.input`
border:none;
${mobile({width: '100%'})}
`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
align-items:center;
${mobile({padding: '10px 0px'})}
`;
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
${mobile({flex:2, justifyContent: 'center'})}
`;
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display: 'none'})}
`;
const Logo= styled.h1`
font-weight:bold;
${mobile({fontSize: '15px'})}
`;
const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px;
${mobile({fontSize: '12px', marginLeft:'2%'})};
`;
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
            <Center><Logo><Link to='/'>ANAGZ</Link></Logo></Center>
            <Right>
            <MenuItems><Link to='/register'>REGISTER</Link></MenuItems>
            <MenuItems><Link to='/login'>SIGN IN</Link></MenuItems>
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