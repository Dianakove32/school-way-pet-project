import { checkDateIsEqual } from "./checkDateIsEqual"

export const checkIsToday = (date:any) => checkDateIsEqual(date, new Date())