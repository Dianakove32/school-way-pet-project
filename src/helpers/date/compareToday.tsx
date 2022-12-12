// принимает дату и отдает сколько дней прошло с текущего дня (0 сегодня, >=1  прошли, <=-1  ещё не наступили)
export const compareToday = (date:any) => Math.floor((new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24)
