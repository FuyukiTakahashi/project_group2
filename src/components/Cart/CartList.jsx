import React from 'react';
import CartItem from './CartItem';
import styled from 'styled-components';

const FluidContainer = styled.div`
.container-fluid{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}
`

export default function CartList({value}) {
    const { cart} =value;
   
    return (
        <FluidContainer>
            <div className="container-fluid">
                {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
                })}        
            </div>
        </FluidContainer>
     
    );
}
