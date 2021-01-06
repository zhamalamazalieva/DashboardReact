import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {Days, CircleData} from './const';

const CirclePieChart = () => {
    const [percent, setPercent] = React.useState(CircleData[0])
    const [dayList, setDayList] = React.useState(false);
    const [dayItem, setDayItem] = React.useState(1);
    const handleClickActiveDays = () => setDayList (dayList ? false : true);
    const handleClickDayItem = (index) => {
        setDayItem(index)
        setPercent(CircleData[index])
    }
    
    return (
       <div className='circle'>
           
            <PieChart  className='circle__chart'               
                data={[
                { title: 'One', value: percent.desktop, color: '#1070CA' },
                { title: 'Two', value: percent.tablet, color: '#F7D154 '},
                { title: 'Three', value: percent.mobile, color: ' #EC4C47' },
                ]}
            />
            <div className='row'>
              <div className="col-4">
              <div className="circle__item">
                   <div className="circle__icon"><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8333 0C24.4352 0 24.9468 0.206597 25.3681 0.619792C25.7894 1.03299 26 1.53472 26 2.125V14.875C26 15.4653 25.7894 15.967 25.3681 16.3802C24.9468 16.7934 24.4352 17 23.8333 17H2.16667C1.56482 17 1.05324 16.7934 0.631944 16.3802C0.210648 15.967 0 15.4653 0 14.875V2.125C0 1.53472 0.210648 1.03299 0.631944 0.619792C1.05324 0.206597 1.56482 0 2.16667 0H23.8333ZM23.725 15C23.7861 15 23.8472 14.9699 23.9083 14.9097C23.9694 14.8495 24 14.7894 24 14.7292V2.27083C24 2.21065 23.9694 2.15046 23.9083 2.09028C23.8472 2.03009 23.7861 2 23.725 2H2.275C2.21389 2 2.15278 2.03009 2.09167 2.09028C2.03056 2.15046 2 2.21065 2 2.27083V14.7292C2 14.7894 2.03056 14.8495 2.09167 14.9097C2.15278 14.9699 2.21389 15 2.275 15H23.725ZM20.6901 22.6875C20.8967 22.4792 21 22.2262 21 21.9286C21 21.631 20.8967 21.378 20.6901 21.1696C20.4835 20.9613 20.2326 20.8571 19.9375 20.8571H15.5547L14.7578 18.3571C14.6693 18.119 14.4922 18 14.2266 18H10.7734C10.5078 18 10.3307 18.119 10.2422 18.3571L9.44531 20.8571H5.0625C4.76736 20.8571 4.51649 20.9613 4.3099 21.1696C4.1033 21.378 4 21.631 4 21.9286C4 22.2262 4.1033 22.4792 4.3099 22.6875C4.51649 22.8958 4.76736 23 5.0625 23H19.9375C20.2326 23 20.4835 22.8958 20.6901 22.6875Z" fill="#A6B1BB"/>
                    </svg>
                    </div>
                   <p className="circle__title">Desktop</p>
                   <p className="circle__percent blue">{percent.desktop}%</p>
               </div>
              </div>
              <div className="col-4">
              <div className="circle__item">
                   <div className="circle__icon"><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8333 0C24.4352 0 24.9468 0.206597 25.3681 0.619792C25.7894 1.03299 26 1.53472 26 2.125V14.875C26 15.4653 25.7894 15.967 25.3681 16.3802C24.9468 16.7934 24.4352 17 23.8333 17H2.16667C1.56482 17 1.05324 16.7934 0.631944 16.3802C0.210648 15.967 0 15.4653 0 14.875V2.125C0 1.53472 0.210648 1.03299 0.631944 0.619792C1.05324 0.206597 1.56482 0 2.16667 0H23.8333ZM23.725 15C23.7861 15 23.8472 14.9699 23.9083 14.9097C23.9694 14.8495 24 14.7894 24 14.7292V2.27083C24 2.21065 23.9694 2.15046 23.9083 2.09028C23.8472 2.03009 23.7861 2 23.725 2H2.275C2.21389 2 2.15278 2.03009 2.09167 2.09028C2.03056 2.15046 2 2.21065 2 2.27083V14.7292C2 14.7894 2.03056 14.8495 2.09167 14.9097C2.15278 14.9699 2.21389 15 2.275 15H23.725ZM20.6901 22.6875C20.8967 22.4792 21 22.2262 21 21.9286C21 21.631 20.8967 21.378 20.6901 21.1696C20.4835 20.9613 20.2326 20.8571 19.9375 20.8571H15.5547L14.7578 18.3571C14.6693 18.119 14.4922 18 14.2266 18H10.7734C10.5078 18 10.3307 18.119 10.2422 18.3571L9.44531 20.8571H5.0625C4.76736 20.8571 4.51649 20.9613 4.3099 21.1696C4.1033 21.378 4 21.631 4 21.9286C4 22.2262 4.1033 22.4792 4.3099 22.6875C4.51649 22.8958 4.76736 23 5.0625 23H19.9375C20.2326 23 20.4835 22.8958 20.6901 22.6875Z" fill="#A6B1BB"/>
                    </svg>
                    </div>
                   <p className="circle__title">Tablet</p>
                   <p className="circle__percent yellow">{percent.tablet}%</p>
               </div>
              </div>
              <div className="col-4">
              <div className="circle__item">
                   <div className="circle__icon"><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8333 0C24.4352 0 24.9468 0.206597 25.3681 0.619792C25.7894 1.03299 26 1.53472 26 2.125V14.875C26 15.4653 25.7894 15.967 25.3681 16.3802C24.9468 16.7934 24.4352 17 23.8333 17H2.16667C1.56482 17 1.05324 16.7934 0.631944 16.3802C0.210648 15.967 0 15.4653 0 14.875V2.125C0 1.53472 0.210648 1.03299 0.631944 0.619792C1.05324 0.206597 1.56482 0 2.16667 0H23.8333ZM23.725 15C23.7861 15 23.8472 14.9699 23.9083 14.9097C23.9694 14.8495 24 14.7894 24 14.7292V2.27083C24 2.21065 23.9694 2.15046 23.9083 2.09028C23.8472 2.03009 23.7861 2 23.725 2H2.275C2.21389 2 2.15278 2.03009 2.09167 2.09028C2.03056 2.15046 2 2.21065 2 2.27083V14.7292C2 14.7894 2.03056 14.8495 2.09167 14.9097C2.15278 14.9699 2.21389 15 2.275 15H23.725ZM20.6901 22.6875C20.8967 22.4792 21 22.2262 21 21.9286C21 21.631 20.8967 21.378 20.6901 21.1696C20.4835 20.9613 20.2326 20.8571 19.9375 20.8571H15.5547L14.7578 18.3571C14.6693 18.119 14.4922 18 14.2266 18H10.7734C10.5078 18 10.3307 18.119 10.2422 18.3571L9.44531 20.8571H5.0625C4.76736 20.8571 4.51649 20.9613 4.3099 21.1696C4.1033 21.378 4 21.631 4 21.9286C4 22.2262 4.1033 22.4792 4.3099 22.6875C4.51649 22.8958 4.76736 23 5.0625 23H19.9375C20.2326 23 20.4835 22.8958 20.6901 22.6875Z" fill="#A6B1BB"/>
                    </svg>
                    </div>
                   <p className="circle__title">Mobile</p>
                    <p className="circle__percent red">{percent.mobile}%</p>
               </div>
              </div>
           </div>
           <div className="circle__footer">
               <div className="circle__row row space-between">
                   <div className="circle__filter" onClick= {handleClickActiveDays}>
                        <span >{Days[dayItem]} ago</span>
                       {dayList &&(
                            <ul className="circle__list">
                            {Days.map((item, index) => {
                                    return(
                                        <li onClick={() => handleClickDayItem(index)}>{item}</li>
                                    )
                                
                            })}
                        </ul>
                       )}
                   </div>
                   <a href="#" className='circle__link'>Audience Devices</a>
               </div>
           </div>
           
       </div>
    )
}

export default CirclePieChart;