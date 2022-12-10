import React from 'react';
import {ListOfSchedule} from "../ListOfSchedule/ListOfSchedule";
const quoterData2 =[
  {
    num: '1',
    start: '01.09',
    end: "29.10"
  },
  {
    num: '2',
    start: '08.11',
    end: "24.12"
  },
  {
    num: '3',
    start: '09.01',
    end: "25.03"
  },
  {
    num: '4',
    start: '03.04',
    end: "31.06"
  }
]
const QuoterSchedule = () => {
  return (
    <>
      <ListOfSchedule list={quoterData2} type={'Четверть'}/>
    </>
  );
};

export default QuoterSchedule;