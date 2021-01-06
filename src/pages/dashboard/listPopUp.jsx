import React from 'react';
import {Days, ChartData, CircleData} from './const';

const ListPopUp = ({setPercent, setArrayOfData}) => {
    const [dayList, setDayList] = React.useState(false);
    const [dayItem, setDayItem] = React.useState(1);
    const handleClickActiveDays = () => setDayList (dayList ? false : true);
    const handleClickDayItem = (index) => {
        setDayItem(index)
        if (ChartData){
            setPercent(CircleData[index])
        }
        if (CircleData){
            setArrayOfData(ChartData[index])

        }
    }
    return (
        
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
    
    )
}

export default ListPopUp;