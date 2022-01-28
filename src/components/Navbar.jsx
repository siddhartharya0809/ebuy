import React from 'react'
import styled from 'styled-components'


// MUI Icons:  I am using here v4 icons as V5 is not supported or having some buggy issues
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


// import SearchIcon from '@mui/icons-material/Search';
// import { SearchIcon } from '@mui/icons-material'

// Styled CSS
const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Left aligned items CSS
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left:25px;
  padding: 5px;
`;

// other styles were not working here so I put them in a inline CSS beloe in input compoenent
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
`;

// Center Aligned items CSS
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 800;
`;

// Right part of Navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* ------------Left part of Navbar------------------- */}
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        {/* -----------Center part of Navbar------------------- */}
        <Center>
          {/* I am not able to bold this EBUY  */}
          <Logo style={{ fontWeight: "bolder" }}> EBUY. </Logo>
        </Center>
        {/* ---------- Right part of Navbar ------------------- */}

        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar