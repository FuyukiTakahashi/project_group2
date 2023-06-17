import React,{Component} from 'react';
import styled from "styled-components";
import Product from "./Product";
import {ProductConsumer} from '../context';

const Container = styled.div`
.itemContainer{ 
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
h1{
  text-align: center;
  margin: 30px;
  color: teal;
}
`;

export default class Products extends Component {
  render(){
    return (
      <Container>
        <h1>Our New Collection!</h1>
        <div className='itemContainer'>
          <ProductConsumer>
          {value=>{
            return value.products.map(product =>{
              return <Product key={product.id} product={product} />;
            });
          }}
          </ProductConsumer>  
        </div>
      </Container>       
    );
  }
} 
