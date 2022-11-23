import styled from 'styled-components';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Info = styled.div({
  opacity:'0',
  width:'100%',
  height:'100%',
  backgroundColor:'rgba(0,0,0,0.2)',
  position:'absolute',
  top:'0',
  button:'0',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection: 'column',
  zIndex:'3',
  transition: 'all 0.5s ease-out',
  cursor:'pointer',
})

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;
const Image = styled.div({
  // height:'70vh',
  zIndex:'2',
})
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icons = styled.div({
  width:'100%',
  height:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
})
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
        <Image>
          <img
              className="imgNotFound"
              src={item.img}
              alt="Not Found"
              style={{
                width:'100%',
                height:'200px'
              }}
            />
          </Image>
      <Info>
          <Icons>
            <Icon>
              <ShoppingCartCheckoutIcon/>
            </Icon>
            <Icon>  
              <SearchIcon/>
            </Icon>
            <Icon>
              <FavoriteBorderIcon/>
            </Icon>
            </Icons>
      </Info>
    </Container>
  )
}

export default Product
