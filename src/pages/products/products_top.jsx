import React from 'react';
import './style.scss';
import Img from '../../assets/image/jpg/pro-background.jpg';
import Logo from '../../assets/image/png/logo-deviace.png';
const ProductsTop = () => {
    return (
            <div className='products__top'>              
                <img src={Img} alt='background' className='products__img' />               
                <div className='row products__logo logo'>
                    <div className='logo__circle'>
                        <img src={Logo} alt='logo Davias'/>
                    </div>
                    <div className='column'>
                        <span className='logo__suptitle'>Products</span>
                        <span className='logo__title'>Devias Products</span>
                    </div>
                </div>
            </div>
            )   
};
export default ProductsTop;