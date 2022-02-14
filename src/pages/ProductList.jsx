
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Anouncement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 10px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px 10px" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  ${mobile({ margin: "10px 0px" })}

`
const Option = styled.option``

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select>
            <Option defaultChecked > Color </Option>
            <Option> White </Option>
            <Option> Black </Option>
            <Option> Red </Option>
            <Option> Blue </Option>
            <Option> Yellow </Option>
            <Option> Green </Option>
          </Select>
          <Select>
            <Option defaultChecked>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option defaultChecked>Featured</Option>
            <Option>Discount - High to Low</Option>
            <Option>Discount - Low to High</Option>
            <Option>Price - High to Low</Option>
            <Option>Price - Low to High</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
