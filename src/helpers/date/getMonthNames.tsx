import { createDate } from "./createDate"

export const getMonthNames = (locale = 'default') => {
  const monthesNames = Array.from({ length: 12 })

  const d = new Date(new Date().getFullYear(), 0, 1)

  monthesNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date } = createDate({ locale, date: new Date(d.getFullYear(), d.getMonth() + i, d.getDate()) })

    monthesNames[monthIndex] = { month, monthIndex, monthShort, date }
  })

  return monthesNames
}
