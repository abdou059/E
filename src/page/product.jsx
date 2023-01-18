import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div({

})
const Wrapper = styled.div({
  display:'flex',
  padding:'50px',
})
const ImageContainer = styled.div({
  flex:'1',
  padding:'0 50px',
})
const InfoContainer = styled.div({
  flex:'1'
})
const Title = styled.h1({
  fontWeight:'200'
})
const Dec = styled.p({
  margin:'20px 0'
})
const Price = styled.span({
  fontWeight:'100',
  fontSize:'40px',
})
const Image = styled.img({
  width:'100%',
  height:'90vh',
  objectFit:'cover',

})
const FilterContainer = styled.div({
display:'flex',
justifyContent:'space-between',
width:'50%',
margin:'30px 0'

})
const Filter = styled.div({
display:'flex',
alignItems:'center',

})
const FilterTitle = styled.div({
fontSize:'20px',
fontWeight:'200',
})
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select({
  marginLeft:'10px',
  padding:'5px',
})
const FilterSizeOption = styled.option({

}) 
const AddContainer = styled.div({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  width:'50%',
})
const AmountContainer = styled.div({
  display:'flex',
  alignItems:'center',
  fontWeight:'700', 
}) 
const Amount =styled.span({
  width:'30px',
  height:'30px',
  borderRadius:'10px',
  border:'1px solid teal',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  margin:'0 5px'
})
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4;
  }
`;
const product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </ImageContainer>
        <InfoContainer>
          <Title>
              Denim Jumpsuit
          </Title>
          <Dec>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam labore recusandae nam molestiae dolorem, aperiam porro illum voluptatibus fugit possimus!
          </Dec>
          <Price>20$</Price>
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
                <FilterSizeOption>X</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
              <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default product
