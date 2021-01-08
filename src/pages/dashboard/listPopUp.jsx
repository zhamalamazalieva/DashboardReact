import React from "react";
import { Days, ChartData, CircleData } from "./const";

const ListPopUp = ({ setPercent, setArrayOfData }) => {
  const [dayList, setDayList] = React.useState(false);
  const [dayItem, setDayItem] = React.useState(1);
  const popUpRef = React.useRef();
  const handleClickOutside = (event) => {
    if (!event.path.includes(popUpRef.current)) {
      setDayList(false);
    }
  };
  const handleClickActiveDays = () => setDayList(dayList ? false : true);
  const handleClickDayItem = (index) => {
    setDayItem(index);
    if (ChartData && setArrayOfData) {
        setArrayOfData(ChartData[index]);
      }
    if (CircleData && setPercent) {
        setPercent(CircleData[index]);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);
  return (
    <div
      ref={popUpRef}
      onClick={handleClickActiveDays}
      className={`circle__filter ${
        dayList ? "circle__filter--up" : "circle__filter--down"
      }`}
    >
      <span>{Days[dayItem]} ago</span>
      {dayList && (
        <ul>
          {Days.map((item, index) => {
            return <li onClick={() => handleClickDayItem(index)}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default ListPopUp;
