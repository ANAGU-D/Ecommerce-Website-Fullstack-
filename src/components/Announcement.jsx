import styled from "styled-components"
import {mobile} from '../responsive'

const Text = styled.p`
${mobile({fontSize: '11px'})}
`
const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
${mobile({width: '100%'})}
`
function Announcement() {
  return (
    <Container>
      <Text> Super Deal! Free Shipping on Orders Over $200</Text>
    </Container>
  )
}

export default Announcement