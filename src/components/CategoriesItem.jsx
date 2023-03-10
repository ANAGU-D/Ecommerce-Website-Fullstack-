import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
 flex:1;
 margin:3px;
 height:70vh;
 position:relative;
 flex-wrap:wrap;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
border-right: .5px gray dotted;
${mobile({height:'30vh'})}
`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
const Title = styled.h1`
 color: #F9F6EE;
  margin-bottom:20px;
`
const Button = styled.button`
  border:none;
  padding:10px;
  background-color:white;
  color:gray;
  cursor:pointer;
  font-weight:600;
`

const CategoriesItem=({item})=> {
  if(!item||!item){
    return null
  }
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button><Link to='/Product'>SHOP NOW</Link> </Button>
        </Info>
    </Container>
  )
}

export default CategoriesItem