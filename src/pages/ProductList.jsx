import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
