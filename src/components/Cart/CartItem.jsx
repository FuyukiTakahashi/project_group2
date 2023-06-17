import React from 'react'

const cartItemStyle ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "20px",
    width:"100%",
    textAlign: "center",
}
const quantityBtn = {
    margin: "10px",
    fontSize: "30px",
    cursor: "pointer",
    color: "teal",
}

export default function CartItem ({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div style={cartItemStyle}>            
            <div className="col-10 mx-auto col-lg-2">
              <img src={img} style={{width:"5rem" , height:"5rem"}}className="img-fluid" alt="product"/>
           </div>
           <div className="col-10 mx-auto col-lg-2">
               {title}
           </div>
           <div className="col-10 mx-auto col-lg-2">
                <span>$ </span>{price}
           </div>
           <div>
             <div>
                 <div>
                    <span style={quantityBtn} onClick={()=>decrement(id)}>-</span>
                    <span style={{fontSize: "20px"}}>{count}</span>
                    <span style={quantityBtn} onClick={() => increment(id)}>+</span>
                 </div>
             </div> 
           </div>
            {/**/} 
            <div className="col-10 mx-auto col-lg-2">
                <div style={{color:"teal",fontSize:"30px",cursor:"pointer"}} onClick={()=>removeItem(id)}>
                    <i className="fa fa-trash-o"></i>
                </div>
            </div>
            <div>
                <strong>total : $ {total}</strong>
            </div>          
        </div>
    )
}
