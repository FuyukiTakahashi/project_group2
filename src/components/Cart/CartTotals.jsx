import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
.row{
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: auto;
    margin-right: 0;
    text-align: center;
    color: teal;
    font-size: 25px;
}
.clearBtn{
    color: teal;
    border: 0.5 solid red;
    width: 150px;
    height: 40px;
    background-color: white;
    border-color: teal;
    font-size: 20px;
}
.clearBtn:hover{
    cursor: pointer;
    transform: scale(1.1);
    color: red;
    border-color: red;
}
.total{
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}
h5{
    margin: 10px;
    margin-right: 60px;
}
`

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal,clearCart} = value;
    return <React.Fragment>
       <Container>
           <div className="row">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button
                            className="clearBtn"
                            type="button"
                            onClick={() => {
                                clearCart();
                            }}>
                            Clear Cart !
                        </button>
                    </Link>
                    <div className='total'>
                    <h5>
                        <span>Subtotal :</span>
                        <strong> {cartSubTotal} $</strong>
                    </h5>
                    <h5>
                        <span>Tax :</span>
                        <strong> {cartTax} $</strong>
                    </h5>
                    <h5>
                        <span>Total :</span>
                        <strong> {cartTotal} $</strong>
                    </h5>
                    </div>
                    
               </div>
           </div>
       </Container>

       </React.Fragment>;
    
}
