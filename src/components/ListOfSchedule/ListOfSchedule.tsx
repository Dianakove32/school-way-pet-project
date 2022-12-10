import React from 'react';
import s from '../../../styles/ListOfSchedule.module.css'

export const ListOfSchedule = ({type, list} : any ): any => {
  return <div className={s.container}>
      {list.map((les: any) =>
        <div className={s.lessonItem} key={les.start}>
            <div className={s.lessonItemNum}>{les.num} {type}</div>
          <div className={s.lessonItemTime}>{les.start}-{les.end}</div>
        </div>)}
    </div>
  ;
}

