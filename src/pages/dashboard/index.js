import React from 'react';
import TopCards from './topCards.jsx';
import './style.scss';
import GroupedBar from './chart';
const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='section-container'>
               <TopCards />
                <div className='row'>
                    <div className='col-9'>
                    <GroupedBar />
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
