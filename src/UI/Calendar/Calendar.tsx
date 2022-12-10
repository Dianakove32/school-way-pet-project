import s from "./Calendar.module.css"
import cn from 'classnames'
import React from 'react';
import {useCalendar} from "../../hook/useCalendar";
import {checkDateIsEqual, checkIsToday} from "../../helpers/date";

const Calendar = ({ today}: any) => {
  const locale = 'default'
   const selectDate = function () { }
  const selectedDate= today
  const { state, functions } = useCalendar({ selectedDate, firstWeekDay: 2, locale })
   return <div className={s.wrapper}>
    <div className={s.heed}>

      {state.mode === 'days' &&
        <span tabIndex={0} className={cn('focus', s.headMode, s.headModeSelect)} onClick={() => functions.setMode('monthes')}>{state.monthNames[state.selectedMonth.monthIndex].month} {state.selectedYear}</span>}
      {state.mode === 'monthes' &&
        <span tabIndex={0} className={cn('focus', s.headMode, s.headModeSelect)} onClick={() => functions.setMode('years')}>{state.selectedYear}</span>}
      {state.mode === 'years' &&
        <span className={s.headMode}>{state.selectedYearInterval[0]} - {state.selectedYearInterval[state.selectedYearInterval.length - 1]}</span>}
      <div className={s.btnCont}>
      <button onClick={() => functions.onClickArrow('left')} className={cn(s.btn, 'focus')}>&#706;</button>
      <button onClick={() => functions.onClickArrow('right')} className={cn(s.btn, 'focus')}>&#707;</button>
      </div>
      </div>
    <div className={cn(s.body, { [s.modeDays]: state.mode === 'days' }, { [s.modeMonths]: state.mode === 'monthes' || state.mode === 'years' })}>
      {state.mode === 'days' && <>
        {/*{state.weekDaysNames.map((weekDaysNames:any) => <span key={weekDaysNames.dayShort} className={s.calendarWeekDay}>{weekDaysNames.dayShort}</span>)}*/}
        {state.calendarDays.map((day:any) => {
          const isAdditional = day.monthIndex !== state.selectedMonth.monthIndex
          const className = cn(
            s.calendarBtn,
            'focus',
            { [s.today]: checkIsToday(day.date) },
            { [s.active]: checkDateIsEqual(day.date, state.selectedDate.date) },
            { [s.dayAdditional]: isAdditional }
          )

          return <button disabled={isAdditional} onClick={() => {
            if (isAdditional) return false
            functions.setSelectedDay(day)
            selectDate()
          }} key={`${day.dayNumber}-${day.monthIndex}`} className={className}>{day.dayNumber}</button>
        })}
      </>}

      {state.mode === 'monthes' &&
        state.monthNames.map((month:  any)  => {
          const className = cn(
            s.calendarBtn,
            'focus',
            { [s.today]: new Date().getMonth() === month.monthIndex && new Date().getFullYear() === state.selectedYear },
            { [s.active]: month.monthIndex === state.selectedMonth.monthIndex },
          )
          return <button onClick={() => {
            functions.setMode('days')
            functions.setSelectedMonthByIndex(month.monthIndex)
          }} key={month.monthShort} className={className}>{month.monthShort}</button>
        })
      }

      {state.mode === 'years' && <>
        <button className={cn(s.calendarBtn, s.dayAdditional)} disabled>{state.selectedYearInterval[0] - 1}</button>

        {state.selectedYearInterval.map((year :any)=> {
          const className = cn(
            s.calendarBtn,
            'focus',
            { [s.today]: new Date().getFullYear() === year },
            { [s.active]: year === state.selectedYear },
          )
          return <button onClick={() => {
            functions.setMode('monthes')
            functions.setSelectedYear(year)
          }} key={year} className={className}>{year}</button>
        })}
        <button className={cn(s.calendarBtn, s.dayAdditional)} disabled>{state.selectedYearInterval[state.selectedYearInterval.length - 1] + 1}</button>
      </>
      }
    </div>
  </div>
}

export default Calendar

export async function getServerSideProps(context:any) {
  const history = context?.req.headers.referer || null
  const today = new Date()
  return {
    props: {
      today,
      history,
    },
  }
}