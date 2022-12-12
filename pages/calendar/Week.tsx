import React, {useEffect, useState} from 'react';
import {checkDateIsEqual, checkIsToday} from "../../src/helpers/date";
import {useCalendar} from "../../src/hook/useCalendar";
import cn from "classnames";
import s from '../../src/UI/Calendar/Calendar.module.css'
import {homeworkData1} from "../../src/components/MockDada/diaryData";
import sh from "../../styles/Schedule.module.css";

const calendar = [
  {
    id: 0,
    name: "Группа 1",
    theme: "ЕГЭ по математике",
    date: "2022-11-07",
    time: "18:00",
    type: "yellow",
  },
  {
    id: 1,
    name: "Яна Власова (Ч)",
    theme: "ЕГЭ по математике",
    date: "2022-11-06",
    time: "15:00",
    type: "grey",
  },
  {
    id: 2,
    name: "Совещание",
    theme: "Созвон на тему",
    date: "2022-12-07",
    time: "17:00",
    type: "red",
  },
  {
    id: 3,
    name: "Совещание",
    theme: "Созвон на тему",
    date: "2022-11-06",
    time: "19:00",
    type: "red",
  },
  {
    id: 4,
    name: "Совещание",
    theme: "Созвон на тему",
    date: "2022-11-05",
    time: "17:00",
    type: "red",
  },
  {
    id: 5,
    name: "Совещание",
    theme: "Созвон на тему",
    date: "2022-12-07",
    time: "19:00",
    type: "red",
  },
  {
    id: 6,
    name: "Совещание",
    theme: "Созвон на тему",
    date: "2022-12-10",
    time: "19:00",
    type: "red",
  },
  {
    id: 7,
    name: "Совещание",
    theme: "Созвон на тему",
    date: "2022-12-05",
    time: "19:00",
    type: "red",
  },
];

const Week = ({listData, type}:any) => {
  const [d] = React.useState(new Date());
  const { state, functions } = useCalendar({
    selectedDate: d,
    firstWeekDay: 2,
  });
  const countWeek = state.calendarDays.length / 7;
  const [weekNumber, setWeekNumber] = React.useState(() => {
    let number = 0;
    for (let i = 0; i < countWeek; i++) {
      // eslint-disable-next-line no-loop-func
      [...state.calendarDays].slice(i * 7, (i + 1) * 7).forEach((day) => {
        if (checkIsToday(day.date)) number = i;
      });
    }
    return number;
  });

  const onSetWeekNumber = (direction:any) => {
    let weekIndex = weekNumber;
    direction === "left" ? (weekIndex -= 1) : (weekIndex += 1);
    if (weekIndex < 0) {
      functions.onClickArrow("left");
    } else if (weekIndex > countWeek - 1) {
      functions.onClickArrow("right");
      weekIndex = 0;
    }
    setWeekNumber(weekIndex);
  };

  if (weekNumber < 0) setWeekNumber(countWeek - 1);

  const week = [...state.calendarDays].slice(
    weekNumber * 7,
    (weekNumber + 1) * 7
  );
  const [firstDayWeek, setFirstDayWeek] = useState();
  const [lastDayWeek, setLastDayWeek] = useState();

  useEffect(() => {
    setFirstDayWeek(week[0]);
    setLastDayWeek(week[week.length - 1]);
  }, [week]);

  // const list = useSelector((state) => getCalendarList(state));

  let [showAddLesson, setShowAddLesson] = useState(false);



  return (
    <div>
      <div className={s.wrapperWeek}>
        <div className={s.head}>
          <div className={cn(s.headMode, s.headModeCont)}>
            <button
              onClick={() => functions.onClickArrow("left")}
              className={s.btn}
            >
              <div>&#706;</div>
            </button>
            <div>
            {state.monthNames[state.selectedMonth.monthIndex].month}{" "}
            {/*{state.selectedYear}*/}
            </div>
            <button
              onClick={() => functions.onClickArrow("right")}
              className={s.btn}
            >
              <div>&#707;</div>
            </button>
          </div>

        </div>

        <div>
          <div  >
            <div  className={s.container}>
            <button
              onClick={() => onSetWeekNumber("left")}
              className={cn(s.btn, s.headerBtn)}
            >
              {/*<div>&#706;</div>*/}
            </button>
            {week.map((day) => {
              const isAdditional =
                day.monthIndex !== state.selectedMonth.monthIndex;
              const className = cn(
                s.calendarBtn,
                { [s.today]: checkIsToday(day.date) },
                { [s.dayAdditional]: isAdditional }
              );
              return (

                <div key={day.dayNumber}  className={s.calendarBtnCont}>
                  <span className={s.calendarWeekDay}>{day.dayShort}</span>
                  <span className={className}>{day.dayNumber}</span>
                </div>
              );
            })}
            <button
              onClick={() => onSetWeekNumber("right")}
              className={cn(s.btn, s.headerBtn)}
            >

              {/*<div>&#707;</div>*/}
            </button>
          </div>
          </div>
          {/*<div className={sh.container}>*/}
          {/*  {type === 'homework' &&*/}
          {/*    listData.map((el:any)=><div key={el.subject} className={el.isChecked ? sh.scheduleItemColored : sh.scheduleItem}>*/}
          {/*      <div className={sh.border}>*/}
          {/*        <div className={sh.scheduleSubject}>{el.subject}</div>*/}
          {/*        <input type='checkbox' className='check' checked={el.isChecked}/>*/}
          {/*        /!*<Checkbox*!/*/}
          {/*        /!*           // hardValue={true}*!/*/}
          {/*        /!*           // onClick={setChecked}*!/*/}

                  {/*/>*/}
          {/*      </div>*/}
          {/*      <div className={sh.border}>*/}
          {/*        <div className={sh.scheduleTeacher}>{el.task}</div>*/}
          {/*      </div>*/}
          {/*      <div className={sh.border}>*/}
          {/*        <div className={sh.scheduleTeacher}> </div>*/}
          {/*      </div>*/}
          {/*    </div>)*/}
          {/*  }*/}
          {/*</div>*/}
          {/*<div className={s.body}>*/}
          {/*  {week.map((day) => (*/}
          {/*    <Col*/}
          {/*      key={day.dayNumber}*/}
          {/*      list={  calendar?.filter((el: any) =>*/}
          {/*            checkDateIsEqual(day.date, new Date(el.date))*/}
          {/*          )*/}
          {/*      }*/}
          {/*    />*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Week;

const Col = ({ list, edit }: any) => {
  return (
    <div className={s.col}>
      {list?.map((el: any, i:any) => (
        <Item edit={edit} key={i} task={el} />
      ))}
    </div>
  );
};

const Item = ({ task, edit = false }: any) => {
  let [showChangeLesson, setShowChangeLesson] = useState(false);

  const className = cn(
    s.task,
    s.edit,
    { [s.yellow]: task.type === "yellow" },
    { [s.red]: task.type === "red" }
  );
  return (
    <>
      <div className={className}>
        <div className={s.taskHead}>
          <h2 className={s.taskTitle}>{task.name}</h2>
          {edit && (
            <button
              className={cn(s.btnEdit, "focus")}
              onClick={() => setShowChangeLesson(true)}
            >

            </button>
          )}
        </div>
        <div className={s.taskBody}>
          <p className={s.text}>{task.theme}</p>
          <span className={s.time}>{task.time}</span>
        </div>
      </div>

    </>
  );
};