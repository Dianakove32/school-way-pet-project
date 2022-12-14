import { getWeekNumber } from "./getWeekNumber"

const genitive = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const createDate = (params:any) => {
  const locale = params?.locale ?? 'default'

  const d = params?.date ?? new Date()
  const dayNumber = d.getDate()
  const day = d.toLocaleDateString(locale, { weekday: 'long' })
  const dayNumberInWeek = d.getDay() + 1
  const dayShort = d.toLocaleDateString(locale, { weekday: 'short' })
  const year = d.getFullYear()
  const yearShort = d.toLocaleDateString(locale, { year: '2-digit' })
  const month = d.toLocaleDateString(locale, { month: 'long' })
  const monthShort = d.toLocaleDateString(locale, { month: 'short' })
  const monthNumber = d.getMonth() + 1
  const monthIndex = d.getMonth()
  const monthGenitive = genitive[monthIndex]
  const timestamp = d.getTime()
  const week = getWeekNumber(d)
  let isChecked=  false

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthGenitive,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week,
    isChecked
  }

}
