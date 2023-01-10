import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from '../responsive';


const Container = styled.div``
const ImgContainer = styled.div`
flex:1;`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:'50vh'})}
`;
const InfoContainer = styled.div`flex:1;
padding:0px 50px;
${mobile({padding:'10px', textAlign:'justify'})}
`;
const Title = styled.h1`
font-size:20px;
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;
`
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:'10px', flexDirection:'column'})}
`;
const Price = styled.span`
font-weight: 100;
font-size:40px;
`
const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:'100%'})}
`;

const FilterColor=styled.div`
 width:20px;
 height:20px;
 border-radius:50%;
 background-color:${props=>props.color};
 margin:0px 5px;
 cursor:pointer;
`

const Filter = styled.div`
display:flex;
align-items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption= styled.option``

const AddContainer= styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({width:'100%'})}
`

const AmountContainer= styled.div`
display:flex;
align-items:center;
font-weight:700;
`

const Amount= styled.span`
width:30px;
height:30px;
border-radius:10px;
display:flex;
border:1px solid teal;
align-items:center;
justify-content:center;
margin:0px 5px;
`

const Button= styled.button`
padding:15px;
border:2px solid teal; 
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`


const Product = () => {
  return (
   <Container>
    
     <Wrapper>
        <ImgContainer>
        <Image src='/images/img08.png'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Lorem, ipsum dolor.</Title>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reprehenderit itaque corrupti architecto veritatis voluptas ipsum sequi labore repellendus impedit?</Desc>
            <Price>$20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkblue'/>
                    <FilterColor color='gray'/>
                    
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button><Link to='/Cart'>ADD TO CART</Link></Button>
            </AddContainer>
        </InfoContainer>
     </Wrapper>
    
   </Container>
  )
}

export default Product