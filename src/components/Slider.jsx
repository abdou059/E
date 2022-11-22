import React, { useState } from 'react'
import styled from "styled-components";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {sliderItems} from '../data.js';

const Container = styled.div({
  width:'100wh',
  height:'100vh',
  display:'flex',
  position:'relative',
  overflow:'hidden',
})
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;
const Wrapper =styled.div`
  height:100%;
  display: flex;
  transition:all 1.5s ease;
  transform:translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  height:100vh;  
  width:100vw;
  display:flex;
  align-items:center;
  background-color: #${(props)=>props.bg};
`;

const ImgContainer = styled.div({
  height:'100%',
  flex:'1',
});
const Image = styled.div({
  height:'80%',
})
const InfoContainer =styled.div({
flex:'1',
padding:'50px',
})
const Title = styled.h1({
fontSize:'70px'
}) 
const Desc = styled.p({
margin:'50px 0px',
fontSize:'30px',
fontWeight:'500',
latterSpacing:'3px'
})
const Button = styled.button({
padding:'10px',
fontSize:'20px',
backgroundColor:'transparent',
cursor:'pointer',
})

function Slider() {
  const [slideIndex,setSlideIndex] = useState(0);

  const handelClick = (direction)=>{
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex-1: 2 )
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1: 0 );
    }
  }
  return ( 
    <Container>
      <Arrow direction='left' onClick={()=>handelClick('left')}>
        <ArrowLeftIcon  />
      </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer >
                <Image >
                  <img  
                  src={item.img} 
                  alt='anemia' 
                  />
                </Image>
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
              ))}
          </Wrapper>
          
      <Arrow direction='right' onClick={()=>handelClick('right')}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
    );
}

export default Slider  ;