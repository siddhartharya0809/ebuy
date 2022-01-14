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
      (DEAL)Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, optio?
    </Container>
  )
}

export default Anouncement