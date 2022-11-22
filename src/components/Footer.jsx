import styled from 'styled-components';
import {Facebook, MailOutline, Phone, Room} from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div({
  display:'flex',
  padding:'10px 25px'
})
const Lift = styled.div({
  flex:'1',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
})
const Logo = styled.h1({

})
const Decryption = styled.div({
  margin:'20px 0'
})
const SocialContainer = styled.div({
  display:'flex',
})
const SocialIcon= styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Center = styled.div({
  flex:'1'
})
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Lift>
        <Logo>ABDOU</Logo>
        <Decryption>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don’t look even slightly believable.
        </Decryption>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon/>
          </SocialIcon>
        </SocialContainer>
      </Lift>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> GAZA , PALESTINE 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +970 597 107 572
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> abdoumonuir9@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
