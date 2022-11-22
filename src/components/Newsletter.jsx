import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'
const Container = styled.div({
  height:'60vh',
  backgroundColor:'#fcf5f5',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column'
})
const Description = styled.div({
  fontSize:'24px',
  fontWeight:'300px',
  marginBottom:'20px'
})
const Title = styled.h1({
  fontSize:'70px',
  marginBottom:'20px'
})
const InputCont = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletr</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputCont>
      <Input placeholder='Your Email'/>
      <Button>
        <SendIcon/>
      </Button>
      </InputCont>
    </Container>
  )
}

export default Newsletter
