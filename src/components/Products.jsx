import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div({
  padding:'20px',
  display:'flex',
  justifyContent:'space-between',
  flexWrap:'Wrap',
})

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item)=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
