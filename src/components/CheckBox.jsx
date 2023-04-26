import React, { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import Calendar from 'react-calendar';
import "./calendar.css"
import 'react-calendar/dist/Calendar.css';
const CheckBox = () => {
const events=['01-02-2023','02-02-2023','05-02-2023','14-02-2023']
  const [date, setDate] = useState(new Date())
  return (
    <Calendar 
      value={date} onChange={setDate}
      tileClassName={({ date }) => {
        let day = date.getDate()
        let month = date.getMonth() + 1;
        if (date.getMonth() < 10) {
          month="0"+month
        }
        if (date.getDate() < 10) {
          day='0'+day
        }
        const realDate = day + '-' + month + '-' + date.getFullYear()
        if (events.find(val => val === realDate)) {
          return "highlight"
        }
      }}
      onClickDay={(date)=>alert(date)}
    />
  )
}

export default CheckBox