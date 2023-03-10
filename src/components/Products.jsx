import React from 'react'
import { PopularProducts } from '../data'
import styled from 'styled-components'
import Product from './Product'


const Container = styled.div`
   padding:20px;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
`


function Products() {
  return (
    <Container>
      {PopularProducts.map(item=>(
        <Product item={item}key={item.id}/>
      ))}
    </Container>
  )
}

export default Products