import React from 'react'
import './productcart.scss'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useStateValue } from '../../StateProvider';

const ProductCart = ({id,img,title,rating,price}) => {
const [{basket},dispatch]=useStateValue();

const removeFromBasket=()=>{
dispatch({
  type:"removeFromBasket",
  id:id
})
}


    return (
        <div className="product-cart">
                <img className="cart-img"  src={img} alt="" />
              <div className="product-cart-info">
                  <p>{title}</p>
                  <p className="productPrize">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <Stack spacing={1}>
               
                 <Rating name="half-rating-read" defaultValue={rating} precision={rating} readOnly />
                </Stack>
                <button onClick={removeFromBasket}>Remove from basket</button>
              </div>
              
        </div>
    )
}

export default ProductCart
