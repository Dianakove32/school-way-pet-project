import React, { useEffect } from "react";
import {
  createDate,
  createMonth,
  getMonthNames,
  getMonthNumberOfDays,
  getWeekDaysNames,
} from "../helpers/date";

const getYearsInterval = (year: any) => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array(10)].map((_, i) => startYear + i);
};

export const useCalendar = ({
                              locale = "default",
                              selectedDate: date ,
                              firstWeekDay = 2,
                            }: any) => {
  const [mode, setMode] = React.useState("days");

  // const [selectedDate, setSelectedDay] = React.useState(createDate({ date }));
  const [selectedDate, setSelectedDay] = React.useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = React.useState(
    createMonth({
      date: new Date(selectedDate.year, selectedDate.monthIndex),
      locale,
    })
  );
  const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);
  const [selectedYearInterval, setSelectedYearInterval] = React.useState(
    getYearsInterval(selectedDate.year)
  );

  useEffect(() => {
    setSelectedDay(createDate({ date }));
  }, [date]);

  useEffect(() => {
    setSelectedMonth(
      createMonth({
        date: new Date(selectedDate.year, selectedDate.monthIndex),
        locale,
      })
    );
    setSelectedYear(selectedDate.year);
    setSelectedYearInterval(getYearsInterval(selectedDate.year));
  }, [selectedDate, locale]);

  const monthNames = React.useMemo(() => getMonthNames(locale), [locale]);
  const weekDaysNames = React.useMemo(
    () => getWeekDaysNames(firstWeekDay, locale),
    [firstWeekDay, locale]
  );

  const days = React.useMemo(
    () => selectedMonth.createMonthDays(),
    [selectedMonth]
  );

  const calendarDays = React.useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(
      selectedMonth.monthIndex,
      selectedYear
    );

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();
    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];
    const lastDay = days[monthNumberOfDays - 1];

    const shiftIndex = firstWeekDay - 1;
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    const numberOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfNextDays + numberOfPrevDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i++) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }
    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i++
    ) {
      result[i] = days[i - numberOfPrevDays];
    }
    for (
      let i = totalCalendarDays - numberOfNextDays;
      i < totalCalendarDays;
      i++
    ) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
    }

    return result;
  }, [selectedMonth, selectedYear, days, firstWeekDay, locale]);

  const onClickArrow = (direction: any, propsMode='') => {
    if ((mode === "years" || propsMode === "years") && direction === "left")
      setSelectedYearInterval(getYearsInterval(selectedYearInterval[0] - 10));

    if ((mode === "years" || propsMode === "years") && direction === "right")
      setSelectedYearInterval(getYearsInterval(selectedYearInterval[0] + 10));

    if (
      (mode === "monthes" || propsMode === "monthes") &&
      direction === "left"
    ) {
      const year = selectedYear - 1;
      if (!selectedYearInterval.includes(year))
        setSelectedYearInterval(getYearsInterval(year));
      return setSelectedYear(year);
    }

    if (
      (mode === "monthes" || propsMode === "monthes") &&
      direction === "right"
    ) {
      const year = selectedYear + 1;
      if (!selectedYearInterval.includes(year))
        setSelectedYearInterval(getYearsInterval(year));
      return setSelectedYear(year);
    }

    if (mode === "days" || propsMode === "days") {
      const monthIndex =
        direction === "left"
          ? selectedMonth.monthIndex - 1
          : selectedMonth.monthIndex + 1;

      if (monthIndex === -1) {
        const year = selectedYear - 1;
        setSelectedYear(year);
        if (!selectedYearInterval.includes(year))
          setSelectedYearInterval(getYearsInterval(year));
        return setSelectedMonth(
          createMonth({ date: new Date(year, 11), locale })
        );
      }
      if (monthIndex === 12) {
        const year = selectedYear + 1;
        setSelectedYear(year);
        if (!selectedYearInterval.includes(year))
          setSelectedYearInterval(getYearsInterval(year));
        return setSelectedMonth(
          createMonth({ date: new Date(year, 0), locale })
        );
      }
      return setSelectedMonth(
        createMonth({ date: new Date(selectedYear, monthIndex), locale })
      );
    }
  };

  const setSelectedMonthByIndex = (monthIndex: any) => {
    setSelectedMonth(
      createMonth({ date: new Date(selectedYear, monthIndex), locale })
    );
  };

  return {
   state : {
      mode,
      calendarDays,
      weekDaysNames,
      monthNames,
      selectedDate,
      selectedMonth,
      selectedYear,
      selectedYearInterval,
    } as any,
    functions: {
      setMode,
      setSelectedDay,
      onClickArrow,
      setSelectedMonthByIndex,
      setSelectedYear,
    },
  };
};
