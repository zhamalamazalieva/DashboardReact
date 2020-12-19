import React from 'react';
import Clock from '../../assets/image/svg/clock.svg';
import Download from '../../assets/image/svg/download.svg';
import { Products} from './const';


const ProductsItem = () => {
    return(
        <div className='row products__row'>
            {Products.map((item) => {
               return (
                <div className='col-4 products__margin'>
                <div className='products__item'>
                    <div className='products__icon'>
                        {item.icon}
                    </div>
                    <h3 className='products__title'>{item.title}</h3>
                    <p className='products__description'>Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.</p>
                    <div className='row products__info space-between'>
                        <div className='products__update align-center'>
                        <img src={Clock} alt='clock'/>
                        <span className='products__info-text'>Updated 2 hr ago</span>
                        </div>
                        <div className='products__download align-center'>
                            <img src={Download} alt='download' />
                            <span className='products__info-text'>594 Downloads</span>
                        </div>
                    </div>
                </div>
                </div>   
               )       
            })}
        </div>
    )
};
export default ProductsItem;
