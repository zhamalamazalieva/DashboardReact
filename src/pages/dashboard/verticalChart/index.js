import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Days, ChartData } from "../const";
import ListPopUp from "../listPopUP";

const GroupedBar = () => {
  const [arrayOfData, setArrayOfData] = React.useState(ChartData[0]);
  const data = {
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
    datasets: [
      {
        label: "# of Red Votes",
        barPercentage: 14,
        barThickness: 15,
        maxBarThickness: 8,
        minBarLength: 10,
        center: [30, 30],
        data: arrayOfData,
        backgroundColor: "#1665D8",
      },
      {
        label: "# of Blue Votes",
        barPercentage: 0.5,
        barThickness: 15,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [45, 15, 12, 14, 20, 30],
        backgroundColor: "#EDF0F2",
      },
    ],
  };
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
  };
  return (
    <>
      <div className="column__row">
        <h3 className="column__title">Users by device</h3>
        <ListPopUp setArrayOfData={setArrayOfData} />
      </div>
      <Bar
        data={data}
        options={options}
        width={50}
        height={20}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );
};

export default GroupedBar;
