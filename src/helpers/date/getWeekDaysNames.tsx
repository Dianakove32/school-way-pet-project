import { createDate } from "./createDate";

export const getWeekDaysNames = (firstWeekDay, locale = "default") => {
  const weekDaysNames = Array.from({ length: 7 });

  const d = new Date();

  weekDaysNames.forEach((_, i) => {
    const { day, dayShort, dayNumberInWeek } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + i),
    });

    weekDaysNames[dayNumberInWeek - 1] = { day, dayShort };
  });

  return [
    ...weekDaysNames.slice(firstWeekDay - 1),
    ...weekDaysNames.slice(0, firstWeekDay - 1),
  ];
};
