import React from 'react';
import {CardsData} from '../const';

const Cards = () => {
    return (
        <div className="row top-card__row">
            {CardsData.map((item) => {
                return (
                    <div className="top-card__column top-card__margin">
                        <div className="top-card__item">
                            <div className="top-card__flex">
                               <div>
                               <span className="top-card__suptitle">{item.suptitle}</span>
                                <h3 className="top-card__title">{item.title}</h3>
                               </div>
                               <div className="top-card__icon">{item.icon}</div>
                            </div>
                            {item.progressBar ? (
                                <span className='top-card__progressbar'></span>
                            ): (
                                <div>
                                  <span className={`top-card__percent ${item.income ? 'top-card__percent--up' : 'top-card__percent--down'}`}>{item.percent}%</span>
                                  <span className="top-card__month">Since last month</span>
                                </div>
                            )}
                        </div>  
                    </div>    
                   )      
                   })}
        </div>
     
    )
}

export default Cards;
