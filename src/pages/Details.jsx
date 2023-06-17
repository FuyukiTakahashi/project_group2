import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Announcement from '../components/Announcement';
import styled from 'styled-components';

const ItemContainer = styled.div`
h1{
    font-size: 50px;
    align-items: center;
    text-align: center;
    color: teal;
    margin: 30px;
}
img{
    width: 400px;
    height: auto;
    border-radius: 10%;
    margin: 10px;
}
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
}
.info{
    margin-left: 20px;
}
h2{
    margin-bottom: 20px;
    color: teal;
}
h4{
    margin-bottom: 20px;
}
p{
    margin-bottom: 20px;
}
.about{
    font-weight: bold;
}
`

export default class Details extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Announcement/>
                <ItemContainer>
                <ProductConsumer>
                {value=>{
                   const {id, category , img, info, price, title, inCart} = value.detailProduct; 
                   return(
                       <div>
                            <div>
                                <div>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <img src={img} alt="product" />
                                </div>
                                <div className='info'>
                                    <h2>Model:{title}</h2>
                                    <h4>
                                        Category: <span>{category}</span>
                                    </h4>
                                    <h4>
                                        <strong>
                                            Price : <span> $ </span>{price}
                                        </strong>
                                    </h4>
                                    <p className='about'>Some Info About Product: </p>
                                    <p>
                                        {info}
                                    </p>
                                    <div>
                                       <Link to="/productlist">
                                           <ButtonContainer>
                                               Back to products
                                           </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                               {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                   ); 
                }}
            </ProductConsumer>
            </ItemContainer>
            <Footer/>
            </>
            
        )
    }
}
