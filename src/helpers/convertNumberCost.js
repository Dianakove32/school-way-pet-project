// преобразует 17823.543 => 17 823,543
export const convertNumberCost = (number) => new Intl.NumberFormat('ru-RU').format(number)
