export const checkDateIsEqual = (d1: any, d2: any) =>
  d1.getFullYear() === d2.getFullYear()
  && d1.getMonth() === d2.getMonth()
  && d1.getDate() === d2.getDate()