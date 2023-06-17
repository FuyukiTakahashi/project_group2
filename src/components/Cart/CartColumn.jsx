import React from 'react';

export default function CartColumns() {
    return (
        <div style={{textAlign:"center", margin: "20px"}}>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
               <div >
                   <p>PRODUCTS</p>  
               </div>
                <div >
                    <p>NAME OF PRODUCT</p>
                </div>
                <div >
                    <p>PRICE</p>
                </div>
                <div >
                    <p>QUANTITY</p>
                </div>
                <div >
                    <p>REMOVE</p>
                </div>
                <div >
                    <p>TOTAL</p>
                </div>
          </div>   
        </div>
    )
}
