import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bolder;
  letter-spacing: 0.5px;
`

const Anouncement = () => {
  return (
    <Container>
      Super Deal! Free shipping on order above $50
    </Container>
  )
}

export default Anouncement