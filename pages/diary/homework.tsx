import React, {useState} from 'react';
import PageLayout from "../../src/components/common/Layouts/PagesLayout";
import Breadcrumbs from "../../src/components/Breadcrumbs/Breadcrumbs";
import {homeworkData1 } from "../../src/components/MockDada/diaryData";
import s from "../../styles/Schedule.module.css";
import Week from "../calendar/Week";

const Homework = () => {
  const [isChecked, setIsChecked] = useState(false)
  const setChecked = () => {
    setIsChecked(!isChecked);
  }
  return (
    <PageLayout title={'Домашнее задание'} className={'diarySchedule'}>
      <Breadcrumbs title={"Домашнее задание"} link={'/diary'}/>
      <Week listData={homeworkData1} type={'homework'}/>
      <div className={s.container}>
        {
          homeworkData1.map(el=><div key={el.subject} className={el.isChecked ? s.scheduleItemColored : s.scheduleItem}>
            <div className={s.border}>
              <div className={s.scheduleSubject}>{el?.subject}</div>
              <input type='checkbox' className='check' checked={el.isChecked}/>
              {/*<Checkbox*/}
              {/*           // hardValue={true}*/}
              {/*           // onClick={setChecked}*/}

              {/*/>*/}
            </div>
            <div className={s.border}>
              <div className={s.scheduleTeacher}>{el.task}</div>
            </div>
            <div className={s.border}>
              <div className={s.scheduleTeacher}> </div>
            </div>
          </div>)
        }
      </div>

    </PageLayout>
  );
};

export default Homework;