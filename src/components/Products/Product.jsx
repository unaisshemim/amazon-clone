import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './product.scss';
import {useStateValue} from '../../StateProvider';

function Product({id,title, price,rating,image}) {
const [{},dispatch]=useStateValue();
    const addToBasket =()=>{
        dispatch({
            type:"addToBasket",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="mainProduct">
            
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrize">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <Stack spacing={1}>
               
                 <Rating name="half-rating-read" defaultValue={rating} precision={rating} readOnly />
                </Stack>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
        </div>
    )
}

export default Product
