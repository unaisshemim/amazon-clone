import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from '../../StateProvider'



function Navbar() {
    const [{basket}] =useStateValue();
    return (
        <div className="navbar_container">
            <Link to='/'>
                <div className="logo">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </div>
            </Link>

            <div className="search-box-container">
                <input />
                <i class="fa-solid fa-magnifying-glass icon"></i>
            </div>

            <div className="nav-items">

                <Link  className="nav-links"  to='/login'>
                    <div className="nav-item">
                        <span className='first'>Hello Unais</span>
                        <span>Sign Out</span>
                    </div>
                </Link >
                <Link  className="nav-links" to='/'>
                    <div className="nav-item">
                        <span className='first'>Orders</span>
                        <span>& Returns</span>
                    </div>
                </Link >
                <Link to = '/'  className="nav-links" >
                    <div className="nav-item">
                        <span className='first'>Your</span>
                        <span>Prime</span>
                        
                    </div>
                </Link>
                <Link to = '/checkout'  className="nav-links" >
                    <div className="nav-cart">
                     <IconButton aria-label="cart">
                    <ShoppingCartIcon  className="cartIcon"  />
              <Badge badgeContent={basket.length} color="primary">
                         </Badge>
                     </IconButton>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
