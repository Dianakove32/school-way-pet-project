import React from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";
import Breadcrumbs from "../../src/components/Breadcrumbs/Breadcrumbs";
import {schedualData1} from "../../src/components/MockDada/diaryData";
import s from "../../styles/Schedule.module.css";
import Week from "../calendar/Week";

const Schedule = () => {
  return (
    <PageLayout title={"Расписание занятий"} className={'diarySchedule'}>
      <Breadcrumbs title={"Расписание занятий"} link={'/diary'}/>
      <Week/>
      <div className={s.container}>
        {
          schedualData1.map(el=><div key={el?.subject} className={s.scheduleItem}>
            <div className={s.border}>
            <div className={s.scheduleSubject}>{el?.subject}</div>
            <div className={s.scheduleData}>{el?.start} - {el.end}</div>
            </div>
            <div className={s.border}>
            <div className={s.scheduleTeacher}>{el.teacher}</div>
              <div className={s.scheduleClass}>каб. {el.class} </div>
            </div>
          </div>)
        }
      </div>
    </PageLayout>
  );
};

export default Schedule;