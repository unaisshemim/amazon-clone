import React from 'react'
import './checkout.scss';
import Navbar from '../../components/Navbar/Navbar'
import { useStateValue } from '../../StateProvider';
import ProductCart from '../../components/ProductCartItems/ProductCart';
import Subtotal from '../../components/Subtotal/Subtotal';


function Checkout() {
    const [{basket}]=useStateValue();


    return (
        <div className="checkout-page" >
            <Navbar/>
            <div className="checkout-info">

           <div className="checkout-left">

            <img className="ad-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg" alt="" />
           

           {basket.length === 0 ? <h1></h1> : <div>
               {basket.map(item =>(
                   <ProductCart
                   
                   id={item.id}
                   title={item.title}
                   img={item.image}
                   price={item.price}
                   rating={item.rating}
                   
                   />
                   ))}
           </div>           
           }</div>
            {basket.length > 0 && (
                <div className="checkout-right">
            <Subtotal/>
            </div>
        )}
        </div>
        
        </div>
       

    )
}

export default Checkout ;
