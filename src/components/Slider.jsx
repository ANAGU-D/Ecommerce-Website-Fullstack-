import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import React, { useState } from 'react'
import { sliderItems } from '../data'
import {mobile} from '../responsive'


const Container = styled.div`
        width:100%;
        height:100vh;
        display: flex;
        position:relative;
        overflow:hidden;
        margin-top:.5%;
        ${mobile({display: 'none'})}
`;
const Arrow = styled.div`
width:50px;
height: 50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content: center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction==='left'&& '10px'};
right:${props=> props.direction==='right'&& '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper =styled.div`
   display:flex;
   height:100%;
   transform:translateX(${(props)=>props.slideIndex* -100}vw);
   transition:all 1.5s ease;
` 
const Slide =styled.div`
width:100vw;
height:100vh;
 display:flex;
 align-items:center;
 background-color: #${props=>props.bg};
`
const ImgContainer =styled.div`
height:100%;
flex:1;
`

const InfoContainer =styled.div`
  padding:50px;
  flex:1;
`
const Image=styled.img`
height:80%;
`
const Title=styled.h1`
font-size:25px;
font-weight:500;
`

const Desc=styled.p`
margin:50px 0px;
font-size: 20px;
letter-spacing:2px;
font-weight:500;
`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor: pointer;
`

function Slider() {
    const [slideIndex, setSlideIndex]=useState(0)
    const handleClick =(direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3);
        }else{
             setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0);
        };
     }

    //Code optimization
//     const handleClick = direction => {
//     setSlideIndex(slideIndex => (direction === "left" ? slideIndex - 1 : slideIndex + 1) % 4);
// };
  return (
   <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
               <Image src={item.img} alt='img2'/>
            </ImgContainer>
            <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
               <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
   </Container>
  )
}

export default Slider