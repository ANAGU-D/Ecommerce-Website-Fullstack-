import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
width:100vw;
height:100vh;
background: url(/images/img7.png) center; 
background:linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255, 0.5)),;
background-repeat: no-repeat;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;
${mobile({width:'100%'})}
`;

const Wrapper = styled.div`
   padding:20px;
   width:20%;
   background-color:white;
   ${mobile({width:'75%'})}
`;
const Title = styled.h1`
font-size:24px;
font-width:300;
`
const Form = styled.form`
display:flex;
flex-direction:column;
`


const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
${mobile({width:'70%',padding:'10px 14px;' })}
`
const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='Username'/>
                <Input placeholder='Password' type='password'/>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login