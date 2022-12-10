import React from 'react';
import {ListOfSchedule} from "../ListOfSchedule/ListOfSchedule";

const holidaysData =[
  {
    num: 'Осенние каникулы',
    start: '30.10',
    end: "07.11"
  },
  {
    num: 'Зимние каникулы',
    start: '25.12',
    end: "08.01"
  },
  {
    num: 'Весенние каникулы ',
    start: '26.03',
    end: "02.04"
  },
  {
    num: 'Летние каникулы',
    start: '30.05',
    end: "01.09"
  }
]
const HolidaysSchedule = () => {

  return (
    <>
      <ListOfSchedule list={holidaysData} type={''}/>
      <div className='icon'></div>
      <style jsx>{`
        .icon{
        position: relative; 
        }
        .icon:before{
        content: "";
        width: 50px;
        height: 47px;
        position: absolute;
        bottom: -100px;
        left: 60%; 
        transform: rotate(250deg);background: url("/fly.svg") no-repeat;
        }
      `}</style>
    </>
  );
};

export default HolidaysSchedule;