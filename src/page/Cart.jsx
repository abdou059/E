import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div({

})
const Wrapper = styled.div({
  padding:'20px',
})
const Title = styled.h1({
  fontWeight:'300',
  textAlign:'center'
})
const Bottom = styled.div({
  display:'flex',
  justifyContent:'space-between',
})
const Top = styled.div({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:'20px',
  
})
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
font-size:24px;
margin:5;
`
const ProductPrice =styled.div`
font-size:30px;
font-weight:200px;
`
const TopButton = styled.button`
  padding:10px;
  font-size:600;
  cursor:pointer;
  border:${props=>props.type==='filled'&&'none'};
  background-color:${props=>props.type==='filled'?'black':'transparent'};
  color:${props=>props.type==='filled'&&'#fff'};

`
const TopTexts = styled.div({

})
const TopText = styled.span({
  textDecoration:'underline',
  cursor:'pointer',
  margin:'0px 10px',
  // display
})

const Info = styled.div`
    flex:3
  `

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  `
const ProductDetail = styled.div`
  flex:2;
  display: flex;
  
  `
const PriceDetail = styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `
const ProductName= styled.span`

  `
const ProductId = styled.span`

  `
const ProductColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=>props.color}
  `
const ProductSize = styled.span`
  
  `
const Image = styled.img`
  width:200px;
  `
const Details = styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around
  `
  const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px
  `
  const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
  const SummaryItemText = styled.div`
  `
  const SummaryItemPrice = styled.div`
  `
  const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
  
function Cart() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BUG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
            <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName><b>product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b>0597107572</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>size:</b>42</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon  />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
