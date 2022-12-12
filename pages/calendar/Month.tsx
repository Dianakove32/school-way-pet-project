import React from 'react';
import Calendar from "../../src/UI/Calendar/Calendar";
import s from "../../styles/Schedule.module.css";
import cn from "classnames";


const arrData=[
  {
    time: '15:00',
    comment: 'Репетитор/математика 15:00 - 16:00',
    id:'1'
  },  {
    time: '16:00',
    comment: 'Репетитор/математика 15:00 - 16:00 ',
    id:'2'
  },  {
    time: '17:00',
    comment: ' Форте/Муз лит 17:00 - 18:30',
    id:'3'
  }, {
    time: '18:00',
    comment: '',
    id:'4'
  }, {
    time: '19:00',
    comment: '',
    id:'5'
  },
]

const Month = () => {

  return (
    <div className='month-container'>
      <div className='cont-tabs'>
      <div className={ 'pict'}></div>
      <Calendar dataList={arrData}/>
      </div>
      <div className={cn(s.calendarContainer, 'customScroll')}>
        {
          arrData.map((el, index: any)=> <div key={el.id} className={s.calendarDetailItem}>
            <div className={s.calendarTime}>{el.time}</div>
            <div className={cn((index%2 == 0 ? s.calendarComment : index%3 == 0 ? s.calendarCommentGreen : s.calendarCommentBlue), 'customScroll')}>{el.comment}</div>
          </div>)
        }</div>
      <style jsx>{`
      .month-container{
      position: relative;
      width: 385px;
      }
      .cont-tabs{
       margin-bottom: 50px;
        padding: 0px 16px;
      }
       .pict{ 
      position: absolute;
      background: url("/cal.svg") no-repeat; 
      background-position: center;
      width: 160px;
      height: 100px;
      top: -10px;
      }
      `}</style>
    </div>
  );
};

export default Month;