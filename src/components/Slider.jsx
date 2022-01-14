import styled from "styled-components"


import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  // background-color: coral;
  
  postion: relative;
`
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
  
  // we are using props to set the position of the arrow
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  
  margin: auto;
  cursor: pointer;
  opacity: 0.5
`

const Wrapper = styled.div`
  height: 100%;
`

const Slide = styled.div`
  width: 100vW;
  height: 100vh;
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`

const Image = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;

`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px
`

const Title = styled.h1``
const Description = styled.p``
const Button = styled.button``

const Slider = () => {
  return (
    <Container>
      {/* Left arrow functionality */}
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>

      {/* Wrapper */}
      <Wrapper>
        <Slide>
          {/* Image Container */}
          <ImgContainer style={{ height: "100%", flex: 1 }}>
            <Image src="../assets/slider_img_1.png" />
          </ImgContainer>

          {/* Information about the product or above Image */}
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>Don't compromise on style! Get 40% off now on new arrivals</Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>


      {/* Right Arrow Functionality */}
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider