import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

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
      data: [12, 15, 16, 5, 5, 13],
      backgroundColor: '#1665D8'
    },
    {
      label: '# of Blue Votes',
      barPercentage: 0.5,
      barThickness:15,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [8, 10, 17, 5, 8, 12],
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

const GroupedBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
)

export default GroupedBar