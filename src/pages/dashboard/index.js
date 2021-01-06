import React from 'react';
import TopCards from './topCards.jsx';
import './style.scss';
import GroupedBar from './chart';
import CirclePieChart from './pieChart';
const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='section-container'>
               <TopCards />
                <div className='row dashboard__row'>
                    <div className='col-9 dashboard__column'>
                        <div className='dashboard__item'>
                        <GroupedBar />
                        </div>
                    </div>
                    <div className='col-3 dashboard__column'>
                        <div className='dashboard__item'>
                        <CirclePieChart/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
