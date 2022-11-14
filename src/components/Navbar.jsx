/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined ,Search } from '@mui/icons-material';
import { display } from '@mui/system';

const Content = styled.div({
});
const Wrapper = styled.div({
  padding: '10px 20px',
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between'
})
const Left = styled.div({
  flex:'1',
  display:'flex',
  alignItems:'center'
})
const Language = styled.span({

})
const SearchContainer = styled.div({
  border:'.5px solid #000',
  padding:'3px',
  display:'flex',
  alignItems:'center',
  marginLeft:'25px'
})
const Input =styled.input({
  border:'none'
})
const Logo = styled.h1({

})
const Center = styled.div({
  flex:'1',
  textAlign:'center'
})
const Right = styled.div({
  flex:'1',
  display:'flex',
  alignItems:'center',
  justifyContent:'flex-end',
})
const MailItem = styled.div({
  fontSize:'14px',
  cursor:'pointer',
  marginLeft:'35px'
})
export default function Navbar() {
  return (
    <Content>
      <Wrapper>
        <Left>
          <Language>EN </Language>
          <SearchContainer>
            <Input/>
            <Search style={{
              color:'gray',
              fontSize:'14px'
            }} />
          </SearchContainer>
        </Left>
        <Center><Logo>Abdou Stor</Logo></Center>
        <Right>
          <MailItem>REGISTER</MailItem>
          <MailItem>SIGN IN</MailItem>
          <MailItem>
          <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined />
          </Badge>
          </MailItem>
        </Right>
      </Wrapper>
    </Content>
  )
}
