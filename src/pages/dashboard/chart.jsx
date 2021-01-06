import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js';
import {Days, ChartData} from './const';

const GroupedBar = () => {
  const [arrayOfData , setArrayOfData] = React.useState(ChartData[0]);
  const [dayList, setDayList] = React.useState(false);
  const [dayItem, setDayItem] = React.useState(1);
  const handleClickActiveDays = ()  => setDayList(dayList ? false : true)
  const handleClickDayItem = (index) => {
    setDayItem(index)
    setArrayOfData(ChartData[index])
  }
  const data = {
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
    datasets: [
    
      {
        label: '# of Red Votes',
        barPercentage: 14,
        barThickness:15,
        maxBarThickness: 8,
        minBarLength: 2,
        center:[30,30],
        data: arrayOfData,
        backgroundColor: '#1665D8'
      },
      {
        label: '# of Blue Votes',
        barPercentage: 0.5,
        barThickness:15,
        maxBarThickness: 8,
        minBarLength: 2,
        data:[45,15, 12, 14, 20, 30] ,
        backgroundColor: '#EDF0F2'
      },
     
    ],
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
 return (
  <>
  <div className="circle__filter" onClick={handleClickActiveDays}>
      <span>{Days[dayItem]} ago</span>
      {dayList &&(
        <ul className='circle__list'>
        {Days.map((item, index) => {
          return (
            <li  onClick={() => handleClickDayItem(index)}>{item}</li>
          )

        })}
      </ul>
      )}
  </div>
  <Bar data={data} options={options} />
  </>
 )
}

export default GroupedBar