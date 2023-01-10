
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from "@mui/icons-material"
import {mobile} from '../responsive';



const Container=styled.div`

`

const Wrapper=styled.div`
padding:20px;
${mobile({padding:'10px'})}
`
const Title =styled.h1`
font-weight:300;
text-align:center;
`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
${mobile({padding:'3%'})}
`

const TopButton =styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==='filled'&& 'none'};
background-color:${props=>props.type==='filled' ? 'black': 'transparent'};
color:${props=>props.type==='filled'&& 'white'}
`
const Bottom=styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:'column'})}
`;

const TopTexts = styled.div`
${mobile({display:'none'})}
`;

const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Info=styled.div`
flex:3;
`
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:fit-content;
`
const Product =styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:'column'})}
`;

const ProductDetail =styled.div`
flex:2;
display:flex;
`

const Image =styled.img`
width:25%
`
const Details =styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`

const ProductName =styled.span``

const ProductId =styled.div``

const ProductColor =styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}
`
const ProductSize =styled.span``
const PriceDetail =styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const PriceAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`

const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:'5px 15px'})}
`;

const ProductPrice = styled.div`
font-size:30px;
font-width:200;
${mobile({marginBottom:'20px'})}
`
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1.5px
`
const SummaryTitle = styled.h1`
font-weight:200;
`

const SummaryItem = styled.div`
 margin: 30px 0px;
 display:flex;
 justify-content:space-between;
 font-weight:${props=>props.type==='total' && '500'};
 font-size:${props=>props.type==='total' && '24px'};
`

const SummaryItemText= styled.span`

`

const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
cursor:pointer;
`

const Cart = () => {
  return (
    <Container>
        
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton >CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
             <Info>
                <Product>
                    <ProductDetail>
                      <Image src='/images/img7.png'/>
                      <Details>
                        <ProductName><b>Product:</b>African Dress</ProductName>
                        <ProductId><b>ID:</b>56342</ProductId>
                         <ProductColor color="black"/>
                        <ProductSize><b>Size:</b>37.5</ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <PriceAmountContainer>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                      </PriceAmountContainer>
                      <ProductPrice>$80</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                      <Image src='/images/img06.png'/>
                      <Details>
                        <ProductName><b>Product:</b>Anagz</ProductName>
                        <ProductId><b>ID:</b>56342</ProductId>
                         <ProductColor color="black"/>
                        <ProductSize><b>Size:</b>37.5</ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <PriceAmountContainer>
                        <Add/>
                        <ProductAmount>2</ProductAmount>
                        <Remove/>
                      </PriceAmountContainer>
                      <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
             </Info>
             <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>  
                  <SummaryItemText>$80</SummaryItemText>  
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>  
                  <SummaryItemText>$5.98</SummaryItemText>  
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>  
                  <SummaryItemText>$-5.90</SummaryItemText>  
                </SummaryItem>
                <SummaryItem type='total'>
                  <SummaryItemText  >Total</SummaryItemText>  
                  <SummaryItemText>$80</SummaryItemText>  
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart