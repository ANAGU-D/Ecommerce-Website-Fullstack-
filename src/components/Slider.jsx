import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
        width:100%;
        height:100vh;
        display: flex;
`
const Arrow = styled.div`
width:50px;
height: 50px;
backgrond-color:#fff7f7;
border-radius:50%
`
function Slider() {
  return (
   <Container>
        <Arrow>
            <ArrowLeftOutlined/>
            <ArrowRightOutlined/>

        </Arrow>
   </Container>
  )
}

export default Slider