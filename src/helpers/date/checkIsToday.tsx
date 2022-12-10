import { checkDateIsEqual } from "./checkDateIsEqual"

export const checkIsToday = date => checkDateIsEqual(date, new Date())