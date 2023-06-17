import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Empty = styled.div`
.row{
    text-decoration: none;
    height: 450px;
    margin: 50px;
    text-align: center;
    color: teal;
    font-size: 20px;
}
h1{
    color: black;
    font-size: 70px;
}
h2{
    margin-top: 60px;
}
p{
    margin-top: 30px;
}
p:hover{
    cursor: pointer;
    transform: scale(1.2);
    color: purple;
}
img {
    width: 250px;
}
`

export default function EmptyCart() {
    return (
        <Empty>
            <div className="row">
                <div className="empty">
                    <img src='https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-stylish-girl-walks-in-with-an-empty-cart-to-a-discount-png-image_5611279.png' alt='emptyCart' />
                  <h1>Your bag is currently "EMPTY"</h1>
                  <h2>Let's take a look at our Super-Juper-New Collection</h2>
                  <NavLink style={{ textDecoration: 'none', color: 'teal', fontSize:'70px' }} to={'/productlist'}><p>Here!!!</p></NavLink>
               </div>
            </div>
        </Empty>
    );
}
