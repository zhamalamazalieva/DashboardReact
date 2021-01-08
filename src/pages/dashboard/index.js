import React from 'react';
import TopCards from './topCards.jsx';
import './style.scss';
import GroupedBar from './chart';
import CirclePieChart from './pieChart';
import LatestProducts from './latestProduct';
import LatestOrders from './latestOrders'
const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='section-container'>
                <div className='row dashboard__row'>
                    <div className='col-12 dashboard__column'>
                    <TopCards />
                    </div>
                    <div className='col-9 dashboard__column'>
                        <div className='dashboard__item chart'>
                        <GroupedBar />
                        </div>
                    </div>
                    <div className='col-3 dashboard__column'>
                        <div className='dashboard__item'>
                        <CirclePieChart/>
                        </div>
                    </div>
                    <div className='col-3 dashboard__column'>
                        <div className='dashboard__item'>
                        <LatestProducts />
                        </div>
                    </div>
                    <div className='col-9 dashboard__column'>
                        <div className='dashboard__item'>
                        <LatestOrders/>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
