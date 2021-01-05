import React from 'react';
import TopCards from './topCards.jsx';
import './style.scss';
// import VerticalBar from './chart'

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='section-container'>
               <TopCards />
               {/* <VerticalBar /> */}
            </div>
        </section>
    )
}

export default Dashboard;
