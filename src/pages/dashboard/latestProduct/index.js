import React from 'react';
import distanseInWordsToNow from 'date-fns/distance_in_words_to_now';
import enLocale from 'date-fns/locale/en';
import {Link}  from 'react-router-dom';

const LatestProducts = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect (() => {
        
        fetch(`http://localhost:3000/database.json`)
        .then((response) => response.json())
        .then((data) => data.products)
        .then((item) => setProducts(item)) 
    }, []);
    return (
        <div className='latest-product column'>
            <div className='latest-product__header'>
                <h3 className='column__title'>Latest Products</h3>
                <span className='column__subtitle'>5 in total</span>
            </div>
            <div className='latest-product__middle column'>
            {products.map((item, index) => {
               if(index<5){
                return(
                  
                        <div className='latest-product__item row'>
                            <img src={item.productLogo} alt='product logo' className='latest-product__logo'></img>
                            <div className='column'>
                                <h3 className='latest-product__title'>{item.productName}</h3>
                                <span className='latest-product__time'> Updated{' '}
                                    {distanseInWordsToNow(item.updatedTime, {
                                        addSuffix: true,
                                        locale: enLocale,
                                        includeSeconds: true,
                                    })}
                                </span>
                            </div>
                        </div>
                  
                )
               }
            })}
              </div>
            <div className='latest-product__footer'>
                <Link className='latest-product__link' to='/products'>View all</Link>
            </div>
        </div>
    )
}

export default LatestProducts;
