import styled from "styled-components";

const Container = styled.div({
  flex:'1',
  margin:'3px',
  height:'70px',
  position:'relative'
});
const Image = styled.img({
  width:'100%',
  height:'100vh',
  objectFit:'cover',

});
const Info = styled.div({
  position:'absolute',
  top:'0',
  left:'0',
  width:'100%',
  height:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
});
const Title = styled.h1({
  marginBottom:'20px',
  color:'#fff'
});
const Button = styled.button({
  padding:'13px',
  border:'none',
  backgroundColor:'#fff',
  color:'gray',
  cursor:'pointer',
  fontWeight:'600'

});
const CategoryItem = ({item}) => {
  return (
    <Container> 
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
